import { Server } from "./clases/server";

console.log('Holi');
console.log('Mi moto no hace "bip"');

const server = new Server();

server.start(()=>{
    console.log("Servidor iniciado en el puerto " + server.port)
});