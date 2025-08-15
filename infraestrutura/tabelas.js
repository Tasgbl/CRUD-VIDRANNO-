class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarUsuarios();
  }

  editarUsuarios() {
    const sql = `ALTER TABLE usuarios
ADD COLUMN IF NOT EXISTS nome VARCHAR(100) NOT NULL,
ADD COLUMN IF NOT EXISTS observacoes TEXT,
ADD COLUMN IF NOT EXISTS dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,  
ADD COLUMN IF NOT EXISTS dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
ADD COLUMN IF NOT EXISTS clienteId INT,
ADD CONSTRAINT fk_cliente
FOREIGN KEY (clienteId) REFERENCES clientes(id) ON DELETE CASCADE ON UPDATE CASCADE
`;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Eita ! deu erro na edição da tabela usuarios ");
        console.log(erro);
        return;
      }
      console.log("Otimo ! Tabela usuarios editada com sucesso");
    });
  }

  criarUsuarios() {
    const sql = `CREATE TABLE IF NOT EXISTS  usuarios (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,	
	DATA DATE,
	serviço VARCHAR (100),
	cliente VARCHAR(100),
	STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
)`;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Eita ! deu erro na criação da tabela usuarios ");
        console.log(erro);
        return;
      }
      console.log("Otimo ! Tabela  usuarios criada com sucesso");
    });
  }
}

module.exports = new Tabelas();
