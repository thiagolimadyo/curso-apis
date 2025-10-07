// 0 - Obter Dados do Usuário
// 1 - Obter Telefone do Usuário
// 2 - Obter Endereço do Usuário
// Executar as funções de forma assíncrona, simulando acesso a um banco de dados

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
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
      return resolve({
        id: 10,
        ddd: "11",
        numero: "999999999",
      });
    }, 300);
  });
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 10,
        rua: "Rua Alegre",
        numero: "200",
        cidade: "São Caetano do Sul",
      });
    }, 200);
  });
}

// Resolvendo as Promises com .THEN e .CATCH

obterUsuario()
  .then((usuario) => {
    return obterTelefone(usuario.id).then((telefone) => {
      return obterEndereco(usuario.id).then((endereco) => {
        return {
          id: usuario.id,
          nome: usuario.nome,
          telefone: { ddd: telefone.ddd, numero: telefone.numero },
          endereco: {
            rua: endereco.rua,
            numero: endereco.numero,
            cidade: endereco.cidade,
          },
        };
      });
    });
  })
  .then((res) =>
    console.log(`
    ID: ${res.id}
    Nome: ${res.nome}
    Telefone: (${res.telefone.ddd})-${res.telefone.numero}
    Endereço: ${res.endereco.rua}, n ${res.endereco.numero} - ${res.endereco.cidade}
    `)
  )
  .catch((error) => console.error(error));

// Resolvendo as Promises com ASYNC / AWAIT

(async function resolverUsuario() {
  try {
    console.time("medida-promise");
    const usuario = await obterUsuario();
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id),
    ]);
    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log(`
      ID: ${usuario.id}
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd})-${telefone.numero}
      Endereço: ${endereco.rua}, n ${endereco.numero} - ${endereco.cidade}
      `);

    console.timeEnd("medida-promise");
  } catch (error) {
    console.error("Erro na busca do Usuário", error);
  }
})();
