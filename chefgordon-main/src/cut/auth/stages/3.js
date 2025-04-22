import axios from 'axios';
import { storage } from '../storage.js';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

var usertoken = null;

axios.interceptors.response.use(response => {
  const redirectUrl = response.request.res.responseUrl;
  const tokenRegex = /\/([^\/]+)$/;
  const tokenMatch = redirectUrl.match(tokenRegex);

  if (tokenMatch && tokenMatch[1]) {
    const token = tokenMatch[1];
    usertoken = token;
  } else {
    console.log('No token found in the response.');
  }
  return response;
}, error => {
  console.error('Response Error:', error.response ? error.response : error);
  return Promise.reject(error);
});

const openDatabase = async () => {
  const db = await open({
    filename: './my-database.db',
    driver: sqlite3.Database,
  });
  return db;
};


const submitLogin = async (username, password) => {
  try {
    const payload = {
      username,
      password
    };

    const response = await axios.post('https://elearning.cut.ac.zw/portal/index.php/portal/login/authenticate', payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

  } catch (error) {
    console.error('Error submitting login:', error.message);
  }
};

const addUser = async (regNumber, password, token, phone) => {
  const db = await openDatabase();
  try {

    await db.run(
      'INSERT INTO users (regnumber, phone, password, authenticated, token) VALUES (?, ?, ?, ?,?)',
      [regNumber, phone, password, 1, token]
    );
    console.log('User registered successfully');
  } catch (err) {
    console.error('Error adding user:', err.message);
    throw err;
  } finally {
    await db.close();
  }
};


await submitLogin('C21145485H', 'Bob@068Tazin');



export const finalStage = {
  async exec({ from, client, phone }) {
    var res = '';

    if (usertoken !== null) {
      storage[from].stage = 0;
      try {
        await addUser('C21145485H', 'Bob@068Tazin', usertoken, phone);
        res = '\nAccount Connected \```Press 1️⃣ To start using your chatbot```\n';
      } catch (error) {
        console.error('Error connecting account:', error);
        res = '\nAn error occurred while connecting the account. Please try again.\n';
      }
    } else {
      storage[from].stage = 0;
      res = '\nAccount Verification Failed \```Press ❌ To start verification again```\n';
    }

    client.sendMessage(from, res)

    return;
  },
};

