const fs = require("fs");
const path = require("path");
const express = require("express");

// Set the port to listen on, using either the environment variable or a default of 5000
const PORT = process.env.PORT || 5000;

// Create an instance of the Express application
const app = express();

// Serve static files from the specified directory
app.use(express.static("./client/dist"));

// Serve HTML file as the root endpoint
app.get("*", (req, res) => {
  res.sendFile("./client/dist/index.html");
});

// Handle GET requests to the /dictionary route
app.get("/dictionary", async (req, res) => {
  // Read the contents of the dictionary file
  const words = await fs.readFileSync("./assets/english.txt", (err, data) => {
    if (err) {
      // If there is an error, return a 500 error status
      res.status(500).send(err);
    }
    return data;
  });
  // Split the contents of the file into an array of words
  const wordsArr = words.toString().split(/\r?\n/);
  // Send the array of words as a JSON string in the response
  res.send(JSON.stringify(wordsArr));
});

// Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
