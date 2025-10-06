// 0 - Obter Dados do Usuário
// 1 - Obter Telefone do Usuário
// 2 - Obter Endereço do Usuário
// Executar as funções de forma assíncrona, simulando acesso a um banco de dados

async function obterUsuario(callback) {
  setTimeout(function () {
    // return callback(new Error("Erro Usuário"), null);
    return callback(null, {
      id: 10,
      nome: "Aladin",
      dataNascimento: new Date("1984-12-05"),
    });
  }, 300);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    // return callback(new Error("Error Telefone", null));
    return callback(null, {
      id: 10,
      ddd: "11",
      telefone: "999999999",
    });
  }, 300);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    // return callback(new Error("Error Endereço", null));
    return callback(null, {
      id: 10,
      endereco: "Rua Alegre, número 100, São Caetano do Sul - SP ",
    });
  }, 200);
}

// function resolverUsuario(error, usuario) {
//   console.log(error || usuario);
// }

obterUsuario(function resolverUsuario(error, usuario) {
  // EM JS: null, "" ou 0 = FALSE
  if (error) {
    console.log({ error });
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log({ error1 });
      return;
    }
    obterEndereco(usuario.id, (error2, endereco) => {
      if (error2) {
        console.log({ error2 });
        return;
      }
      console.log(`
        ID: ${usuario.id}
        Nome: ${usuario.nome}
        Telefone: (${telefone.ddd})${telefone.telefone}
        Endereço: ${endereco.endereco}
        `);
    });
  });
});
