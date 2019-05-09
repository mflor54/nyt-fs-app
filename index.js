require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const app = express();
const port = process.env.port || 8080;

app.use(cors());

const API_KEY = process.env.NYT_API_KEY;

// Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));

// build mode
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/public/index.html"));
// });

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

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}

app.listen(process.env.PORT || 8080, () => {
  console.log("listening on port", port);
});
