const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

// * Rotas
app.get("/", (req, res) => {
  res.send("Testes com parâmetros.");
});

// * Rota com hífen
app.get("/distancia1/:pontoA-:pontoB", (req, res) => {
  const pontoA = req.params.pontoA;
  const pontoB = req.params.pontoB;
  const distancia = pontoB - pontoA;
  res.send(`A distância entre ${pontoA} e ${pontoB} é ${distancia}.`);
});

// * Rota com ponto
app.get("/distancia2/:pontoA.:pontoB", (req, res) => {
  const pontoA = req.params.pontoA;
  const pontoB = req.params.pontoB;
  const distancia = pontoB - pontoA;
  res.send(`A distância entre ${pontoA} e ${pontoB} é ${distancia}.`);
});
