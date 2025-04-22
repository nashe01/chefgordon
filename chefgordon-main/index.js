
const axios = require('axios');

// Replace with your actual API key
const API_KEY = "AIzaSyDPejEBKTQQAXDlFw_uncDRjKA1HGnhMa4";

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

const data = {
  contents: [
    {
      parts: [
        {
          text: "explain in not more than 200 words how to cook a random meal from ....'eggs, flour, yeast, tomatoes and beef'",
        },
      ],
    },
  ],
};

axios
  .post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    const message = response.data.candidates[0].content.parts[0].text;
    console.log("Message:", message);
  })
  .catch((error) => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });
