const { Router } = require("express");
const router = Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/usuarios", (req, res) => {
  const resposta = usuarioController.buscar();
  res.send(resposta);
});

router.post("/usuarios", (req, res) => {
  // Chama o método criarAtendimento do usuarioController
  const resposta = usuarioController.criar();
  res.send(resposta);
});

router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.alterar(id);
  res.send(resposta);
});

router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const resposta = usuarioController.deletar(id);
  res.send(resposta);
});

module.exports = router;
