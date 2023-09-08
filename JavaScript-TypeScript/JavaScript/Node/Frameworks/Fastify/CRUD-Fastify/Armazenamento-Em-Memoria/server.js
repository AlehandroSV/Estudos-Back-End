import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const db = new DatabaseMemory();

const server = fastify();

server.post("/videos", (req, res) => {
  const { title, description, duraction } = req.body;

  db.create({
    title,
    description,
    duraction,
  });

  return res.status(201).send();
});

server.get("/videos", (req, res) => {
  const { search } = req.query;

  const videos = db.list(search);

  return videos;
});

server.put("/videos/:id", (req, res) => {
  const id = req.params.id;
  const { title, description, duraction } = req.body;

  db.update(id, {
    title,
    description,
    duraction,
  });

  return res.status(204).send();
});

server.delete("/videos/:id", (req, res) => {
  const id = req.params.id;

  db.delete(id);

  return res.status(204).send();
});

server.listen({
  port: 3000,
});
