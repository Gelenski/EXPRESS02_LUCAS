const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

const functions = require("./functions");

app.get("/", (req, res) => {
  res.send("Teste com arquivos externos.");
});

// * Adição
app.get("/add/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const result = functions.add(a, b);
  res.send(`O resultado da soma entre ${a} e ${b} é ${result}.`);
});

// * Subtração
app.get("/sub/:a-:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const result = functions.sub(a, b);
  res.send(`O resultado da subtração entre ${a} e ${b} é ${result}.`);
});
// * Multiplicação
app.get("/multiply/:a-:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const result = functions.multiply(a, b);
  res.send(`O resultado da multiplicação entre ${a} e ${b} é ${result}.`);
});

// * Divisão
app.get("/divide/:a-:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const result = functions.divide(a, b);
  res.send(`O resultado da divisão entre ${a} e ${b} é ${result}.`);
});
