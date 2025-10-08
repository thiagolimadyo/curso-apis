import getPeope from "../for-forin-forof/service.js";

Array.prototype.meuFilter = function (callback) {
  const novoArray = [];

  for (let index in this) {
    const result = callback(this[index]);
    if (!result) continue;
    novoArray.push(this[index]);
  }
  return novoArray;
};

async function main() {
  try {
    const { results } = await getPeope("a");

    // const familiaLars = results.filter((pessoa) => {
    //   const result = pessoa.name.toLowerCase().indexOf("lars") !== -1;
    //   return result;
    // });
    console.time("meuFilter");
    const familiaLars = results.meuFilter((pessoa) => {
      const result = pessoa.name.toLowerCase().indexOf("lars") !== -1;
      return result;
    });

    familiaLars.forEach((pessoa) => console.log(pessoa.name));
    console.timeEnd("meuFilter");
    // const familiaLars = results.filter(
    //   (pessoa) => pessoa.name.toLowerCase().indexOf("lars") !== -1
    // );

    // familiaLars.forEach((pessoa) => console.log(pessoa.name));
  } catch (error) {
    console.error(error);
  }
}

main();
