/*import express from "express";

const app = express();

const user = [];

app.use(express.json());

app.get("/usuarios", (req, res) => {
  res;

  res.send("O get do Server está rodando!");
});

app.get("/", (req, res) => {
  res.send("Hello World! This is the root endpoint.");
});

app.post("/usuarios", (req, res) => {
  user.push(req.body);

  console.log(req.body);

  if (!req.body.nome || !req.body.idade) {
    return res.status(401).send("Nome e idade são obrigatórios.");
  }
  if (typeof req.body.idade !== "number") {
    return res.status(402).send("Idade deve ser um número.");
  }
  if (req.body.idade < 0) {
    return res.status(403).send("Idade não pode ser negativa.");
  }
  if (req.body.nome.length < 3) {
    return res.status(404).send("Nome deve ter pelo menos 3 caracteres.");
  }
  if (user.some((u) => u.nome === req.body.nome)) {
    return res.status(405).send("Usuário já existe.");
  }
  if (user.length >= 10) {
    return res.status(406).send("Limite de usuários atingido.");
  }
  if (req.body.idade > 120) {
    return res.status(407).send("Idade não pode ser maior que 120 anos.");
  }
  if (req.body.nome.length > 50) {
    return res.status(408).send("Nome não pode ter mais de 50 caracteres.");
  }
  if (req.body.idade % 1 !== 0) {
    return res.status(409).send("Idade deve ser um número inteiro.");
  }
  if (req.body.nome.trim() === "") {
    return res.status(410).send("Nome não pode ser vazio.");
  }

  // Se todas as validações passarem, adiciona o usuário
  user.push(req.body);

  console.log(user);
});

app.listen(3000),
  () => {
    console.log("Server is running on port 3000");
  };
export default app;
*/
