const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

tabelas.init(conexao);

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("Erro ao iniciar o servidor:");
    return;
  }
  console.log("Servidor rodando belezinha ");
});
