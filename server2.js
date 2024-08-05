const express = require("express");
const morgan = require("morgan");

const server2 = express();

server2.listen(3000);

// * Criando middleware para geração de logs.
server2.use(morgan(":method :url :status"));

server2.get("/", (req, res) => {
  res.send("Server2 Connection Test");
});
