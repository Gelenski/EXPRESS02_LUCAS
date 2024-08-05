const express = require("express");
const server = express();

server.listen(3000);

// server.use((req, res) => {
//   console.log("Teste");
// });

// Middleware:
// server.use((req, res, next) => {
//   console.log("Teste1");
//   next();
// });

server.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

server.get("/", (req, res) => {
  console.log(req.requestTime);
  res.send("<h1>Teste de conexão.</h1>");
});
