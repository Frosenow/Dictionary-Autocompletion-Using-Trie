const fs = require("fs");
const express = require("express");

// Create an instance of the Express application
const app = express();

// Serve static files from the specified directory
app.use(express.static("../client/dist"));

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"), function (err) {
    res.status(500).send(err);
  });
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
app.listen(process.env.PORT || 5000);
