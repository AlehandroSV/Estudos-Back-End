import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  const { nome, idade } = req.query;

  return res.json({
    title: "Hello Word",
    message: `Olá ${nome}, tudo bem?`,
    idade: idade,
  });
});

app.get("/hello/:nome", (req, res) => {
  const nome = req.params;

  return res.json({
    title: "Hello Word",
    message: `Olá ${nome}, tudo bem?`,
  });
});

app.listen(3000);
