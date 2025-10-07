import { EventEmitter } from "node:events";
const emitter = new EventEmitter();

// Adiciona um ouvinte para o evento 'mensagem'
emitter.on("event", function firstListener(texto) {
  console.log(`Helloooo! first listener`);
});

emitter.on("event", function secondListener(arg1, arg2) {
  console.log(`Event with parameters ${arg1}, ${arg2} with second Listener`);
});

emitter.on("event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`Event with parameters ${parameters} with third Listener`);
});

// Emite o evento 'mensagem' com um argumento
emitter.emit("event", 1, 2, 3, 4, 5);
// Explicação:
// 1. Criamos uma instância de EventEmitter.
// 2. Usamos .on() para registrar uma função que será chamada quando o evento 'mensagem' for emitido.
// 3. Usamos .emit() para disparar o evento 'mensagem', passando um texto como argumento.
// 4. O ouvinte recebe esse texto e imprime no console.
