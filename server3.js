const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Servidor em execução");
});

// * Rotas com parâmetros.
app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

//  * Rota com um parâmetro.
app.get("/ola/:nome", (req, res) => {
  console.log(req.params.nome);
  res.send("Olá" + " " + req.params.nome);
});

//  * Rota com dois parâmetros.
app.get("/ola/:nome/:empresa", (req, res) => {
  res.send("Olá " + req.params.nome + " da empresa " + req.params.empresa);
});

// * Rota com soma de parâmetros

app.get("/soma/:a/:b", (req, res) => {
  res.send(
    "O resultado da soma de: " +
      req.params.a +
      " e " +
      req.params.b +
      " é igual a: " +
      (parseInt(req.params.a) + parseInt(req.params.b))
  );
});
