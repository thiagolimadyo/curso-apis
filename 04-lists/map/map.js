import getPeope from "../for-forin-forof/service.js";

Array.prototype.meuMap = function (callback) {
  const fn_ok = typeof callback === `function`;
  if (!fn_ok) throw new Error("Você deve enviar uma função válida");

  const novoArrayMapeado = [];

  for (let i = 0; i < this.length; i++) {
    const resultado = callback(this[i], i, this);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const result = await getPeope("L");

    // console.time("map");
    // const pessoas = result.results.map((pessoa) => pessoa.name);
    // console.timeEnd("map");

    // Usando meuMap
    // const pessoas = result.results.meuMap(
    //   (pessoa, i) => `[${i}]-${pessoa.name}`
    // );
    // console.log(pessoas);

    const pessoas = result.results.meuMap((pessoa) => pessoa.name);
    console.log(pessoas);

    // console.time("forEach");
    // const pessoas2 = [];
    // result.results.forEach((pessoa) => pessoas2.push(pessoa.name));
    // console.log(pessoas2);
    // console.timeEnd("forEach");
  } catch (error) {
    console.error("error", error);
  }
}

main();
