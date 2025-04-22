import fetch from "node-fetch";
import axios from 'axios';
import { menu } from '../menu.js';
import { storage } from '../storage.js';

const url = "https://api.edenai.run/v2/workflow/ae8723f2-d037-40b0-ac81-00b24617b384/execution/"
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWNjMmMwOWQtZmVkNS00OWQ5LWFkZGEtNzQ4MGM1MDEwNzUxIiwidHlwZSI6ImFwaV90b2tlbiJ9.bqh1TJ4Miik7RthIy7iuX6RHNIOK6QBxRiXQnAJP5R4'

export const two = {
  async exec({ from, message }) {
    if (!storage[from]) {
      console.error('No storage entry for from:', from);
      return 'Error: No storage found';
    }

    storage[from].stage = 0;

    const ingredients = message.split(',').map(ing => ing.trim());

    // Uncomment when ready to use
    const recipe = await generateRecipe(ingredients);

    return recipe;
  },
};


function generateRecipe(ingredients) {
  const payload = {
    "prompt": `Create a recipe using these ingredients: ${ingredients.join(', ')}. Include a name, ingredients list, and step-by-step instructions.`
  };

  // Step 1: Send the initial POST request to generate the recipe
  return axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWNjMmMwOWQtZmVkNS00OWQ5LWFkZGEtNzQ4MGM1MDEwNzUxIiwidHlwZSI6ImFwaV90b2tlbiJ9.bqh1TJ4Miik7RthIy7iuX6RHNIOK6QBxRiXQnAJP5R4"
    }
  })
    .then(response => {
      // Step 2: Extract the ID from the response
      const resultId = response.data.id;
      console.log("Result first : " + JSON.stringify(response.data));

      // Step 3: Poll for the status of the result
      return pollStatus(resultId);
    })
    .catch(error => {
      console.error(`Error: ${error.message}`);
      return `Error: ${error.message}`;
    });
}

function pollStatus(resultId) {
  let retries = 0;
  const maxRetries = 20;

  return new Promise((resolve, reject) => {
    function checkStatus() {
      if (retries < maxRetries) {
        axios.get(`${url}${resultId}/`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWNjMmMwOWQtZmVkNS00OWQ5LWFkZGEtNzQ4MGM1MDEwNzUxIiwidHlwZSI6ImFwaV90b2tlbiJ9.bqh1TJ4Miik7RthIy7iuX6RHNIOK6QBxRiXQnAJP5R4"
          }
        })
          .then(res => {
            if (res.status === 200) {
              const data = res.data;
              if (data.content.status === 'success') {
                console.log("Recipe generation completed!");
                resolve(data.content.results.output.results[0].generated_text); // Resolve with the recipe
              } else {
                retries++;
                setTimeout(checkStatus, 3000); // Retry after 3 seconds
              }
            } else {
              reject(`Error: ${res.statusText}`);
            }
          })
          .catch(err => {
            reject(`Error: ${err.message}`);
          });
      } else {
        reject("Max retries reached. The recipe generation did not complete in time.");
      }
    }

    checkStatus();
  });
}


