import getPeople from "../for-forin-forof/service.js";

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal =
    typeof valorInicial !== "undefined" ? valorInicial : this[0] - this[0];
  for (let i = 0; i < this.length; i++) {
    valorFinal = callback(valorFinal, this[i], i, this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await getPeople("a");

    const pesos = results.map((element) => {
      return parseInt(element.height);
    }, 0);

    const pesoTotal = pesos.reduce((acc, el, index) => {
      return acc + el;
    }, 0);

    const pesoTotal2 = pesos.meuReduce((acc, el, index) => {
      return acc + el;
    });

    console.log(pesoTotal);
    console.log(pesoTotal2);
  } catch (error) {
    console.error("Error", error);
  }
}
main();
