"use strict";

class Usuario {
  retornarDadosUsuario(callback) {
    // setTimeout(() => {
    //   return callback(10 + 20);
    // });
    let contador = 1;
    let temp = setInterval(() => {
      callback({ contador });
      contador++;
      if (contador > 10) clearInterval(temp);
    }, 100);
  }
}

const usuario = new Usuario();

usuario.retornarDadosUsuario((res) => {
  console.log(res);
});
