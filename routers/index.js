const routerAtendimento = require("./usuarioRoute");
const AtendimentoController = require("../controllers/usuarioController");
const express = require("express");

module.exports = (app) => {
  app.use(routerAtendimento);
};
