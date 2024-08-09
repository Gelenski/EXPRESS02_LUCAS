const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

// * Dados de clientes
const clientes = [
  { id: 1, nome: "Altamiro", telefone: "111111111", email: "alta@gmail.com" },
  {
    id: 2,
    nome: "Edison",
    telefone: "222222222",
    email: "edison@outlook.com.br",
  },
  {
    id: 3,
    nome: "Meriane",
    telefone: "333333333",
    email: "meri.silva@hotmail.com",
  },
  {
    id: 4,
    nome: "Lucas",
    telefone: "444444444",
    email: "lucas.gelenski@gmail.com",
  },
  {
    id: 5,
    nome: "Carlos",
    telefone: "555555555",
    email: "carlos.silva@outlook.com",
  },
];

// * Rotas
app.get("/", (req, res) => {
  res.send("API de clientes.");
});

app.get("/total_clientes", (req, res) => {
  res.send("Total de clientes: " + clientes.length + ".");
});

app.get("/clientes/:id", (req, res) => {
  const cliente = clientes.find((c) => c.id === parseInt(req.params.id));
  if (!cliente) {
    res.status(404).send("Cliente não encontrado.");
  }
  res.send(
    `Cliente: ${cliente.nome} | Telefone: ${cliente.telefone} | Email: ${cliente.email}.`
  );
});
