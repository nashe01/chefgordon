import fs from 'fs'; // Required for file handling in Node.js
import fetch from 'node-fetch'; // For making HTTP requests
import FormData from 'form-data'; // For handling multipart form data

const url = "https://api.edenai.run/v2/workflow/2677867c-fc42-4601-9ce8-7fa22304b86a/execution/";

const formData = new FormData();

// Append the file to FormData
const filePath = 'download.jpeg'; // Replace with your actual file path
formData.append('file', fs.createReadStream(filePath), 'image.jpg'); // Provide a proper filename

// Append the questions to FormData
const questionString = "list food items in this image";
formData.append('Questions', questionString);

const launchExecution = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...formData.getHeaders(), // Automatically include necessary headers
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmM4NDAwYzYtMjIwZi00MGJlLTkxZWMtOWMwMTJkOGQwZDY0IiwidHlwZSI6ImFwaV90b2tlbiJ9.YRDFIdRtoms0JvRXAiFUEUBk_duvLFB2I-_0WwZcaks" // Replace with your valid token
      },
      body: formData
    });

    // Handle the response
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response:', result); 
    return result;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Execute the function
(async () => {
  const data = await launchExecution();
  console.log('Data received:', data);
})();
