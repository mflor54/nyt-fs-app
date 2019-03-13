require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.port || 8080;

app.use(cors());

const API_KEY = process.env.NYT_API_KEY;

// Fetch articles route based on user input
app.get("/api/articles/:subject", (req, res) => {
  const subject = req.params.subject;
  axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${subject}&api-key=${API_KEY}`
    )
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Fetch based off hashtag user clicks
app.get("/api/hashtags/:tag", (req, res) => {
  const tag = req.params.tag;
  axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${tag}&api-key=${API_KEY}`
    )
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
