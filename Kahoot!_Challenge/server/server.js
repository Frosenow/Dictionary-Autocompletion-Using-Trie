const fs = require("fs");
const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/dictionary", async (req, res) => {
  const words = await fs.readFileSync("./assets/english.txt", (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    return data;
  });
  const wordsArr = words.toString().split(/\r?\n/);
  res.send(JSON.stringify(wordsArr));
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
