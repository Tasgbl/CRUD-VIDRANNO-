class clienteController {
  buscar() {
    return "Buscando todos os usuários...";
  }
  criar() {
    return "Estamos criando um novo usuário";
  }
  alterar(id) {
    return "Estamos atualizando o usuário de id " + id + "...";
  }
  listar() {
    return "Listando todos os usuários...";
  }
  excluir(id) {
    return "Estamos deletando o usuário " + id + "...";
  }
}
module.exports = new clienteController();
