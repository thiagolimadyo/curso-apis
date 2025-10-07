// 0 - Obter Dados do Usuário
// 1 - Obter Telefone do Usuário
// 2 - Obter Endereço do Usuário
// Executar as funções de forma assíncrona, simulando acesso a um banco de dados
import util from "node:util";
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // return reject(new Error("Erro Usuário"));
      return resolve({
        id: 10,
        nome: "Aladin",
        dataNascimento: new Date("1984-12-05"),
      });
    }, 300);
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error("Error Telefone"));
      return resolve({
        id: 10,
        ddd: "11",
        telefone: "999999999",
      });
    }, 300);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    // return callback(new Error("Error Endereço", null));
    return callback(null, {
      id: 10,
      rua: "Rua Alegre",
      numero: 200,
      cidade: "São Caetano do Sul",
    });
  }, 200);
}

obterUsuario()
  .then((usuario) => {
    return obterTelefone(usuario.id).then((result) => {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: {
          ddd: result.ddd,
          numero: result.telefone,
        },
      };
    });
  })
  .then((resultado) => {
    return obterEnderecoAsync(resultado.usuario.id).then((endereco) => {
      resultado.endereco = {
        rua: endereco.rua,
        numero: endereco.numero,
        cidade: endereco.cidade,
      };
      return resultado;
    });
  })
  .then((result) =>
    console.log(`
    ID: ${result.usuario.id}
    Nome: ${result.usuario.nome}
    Telefone: (${result.telefone.ddd})-${result.telefone.numero}
    Endereço: ${result.endereco.rua}, número ${result.endereco.numero}, ${result.endereco.cidade}
    `)
  )
  .catch((error) => console.log("Error", error));

// function resolverUsuario(error, usuario) {
//   console.log(error || usuario);
// }

// obterUsuario(function resolverUsuario(error, usuario) {
//   // EM JS: null, "" ou 0 = FALSE
//   if (error) {
//     console.log({ error });
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.log({ error1 });
//       return;
//     }
//     obterEndereco(usuario.id, (error2, endereco) => {
//       if (error2) {
//         console.log({ error2 });
//         return;
//       }
//       console.log(`
//         ID: ${usuario.id}
//         Nome: ${usuario.nome}
//         Telefone: (${telefone.ddd})${telefone.telefone}
//         Endereço: ${endereco.endereco}
//         `);
//     });
//   });
// });
