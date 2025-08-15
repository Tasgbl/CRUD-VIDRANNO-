const { Router } = require("express");
const router = Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/usuarios", (req, res) => {
  const resposta = usuarioController.listar();
  res.send(resposta);
});

router.post("/usuarios", (req, res) => {
  // Chama o método criarAtendimento do usuarioController

  usuarioController.criar();
  res.send("Estamos criando um novo usuário");
});

router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;

  res.send("Estamos atualizando o usuário de id " + id + "...");
});

router.get("/.", (req, res) => {
  res.send("Bem-vindo à API de Usuários!");
});

router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;

  res.send("Estamos deletando o usuário " + id + "...");
});

module.exports = router;
