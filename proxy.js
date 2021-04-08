const express = require("express");
const request = require("request");

const baseUrl = "https://afternoon-waters-49321.herokuapp.com";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/playlists", (req, res) => {
  request(
    { url: baseUrl + "/v1/browse/featured-playlists" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/playlist/:id", (req, res) => {
  request(
    { url: baseUrl + "/v1/playlists/" + req.params.id },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
  console.log(req.params.id);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
