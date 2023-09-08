import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.write("Olá!");

  return res.end();
});

server.listen(8000);
