import getPeople from "./service.js";

main();

async function main() {
  try {
    const result = await getPeople("L");
    const pessoas = [];
    const pessoas2 = [];
    const pessoas3 = [];

    console.time("FOR");
    for (let i = 0; i < result.results.length; i++) {
      const pessoa = result.results[i];
      pessoas.push(pessoa.name);
    }
    console.timeEnd("FOR");

    console.time("FOR-IN");
    for (let index in result.results) {
      const pessoa = result.results[index];
      pessoas2.push(pessoa.name);
    }
    console.timeEnd("FOR-IN");

    console.time("FOR-OF");
    for (let pessoa of result.results) {
      pessoas3.push(pessoa.name);
    }
    console.timeEnd("FOR-OF");

    console.log(`FOR`);
    console.log({ pessoas });
    console.log(`FOR-IN`);
    console.log({ pessoas2 });
    console.log(`FOR-OF`);
    console.log({ pessoas3 });
  } catch (error) {
    console.error(error);
  }
}
