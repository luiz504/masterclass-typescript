import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Word2");
});

app.listen(3333);
