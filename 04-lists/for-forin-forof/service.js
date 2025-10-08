import axios from "axios";
const URL_BASE = `https://swapi.dev/api/people`;

export default async function getPeople(nome) {
  const url = `${URL_BASE}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

// getPeople("Luke Skywalker")
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.error(error));
