const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const posts = require("../data/posts.json");

  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).send("Post not found");
  setTimeout(() => {
    res.send(post);
  }, 3000);
});

app.listen(port, () => {
  console.log(`grab server app listening at http://localhost:${port}`);
});
