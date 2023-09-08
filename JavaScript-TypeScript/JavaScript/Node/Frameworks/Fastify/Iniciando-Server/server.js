import { fastify } from "fastify";

const server = fastify();

server.get("/", (req, res) => {
  return "Olá!";
});

server.listen({
  port: 3000,
});
