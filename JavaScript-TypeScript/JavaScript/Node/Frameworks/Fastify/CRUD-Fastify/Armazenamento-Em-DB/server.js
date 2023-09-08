import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const db = new DatabasePostgres();
const server = fastify();

server.post("/videos", async (req, res) => {
  const { title, description, duration } = req.body;

  await db.create({
    title,
    description,
    duration,
  });

  return res.status(201).send();
});

server.get("/videos", async (req, res) => {
  const { search } = req.query;

  const videos = await db.list(search);

  return videos;
});

server.put("/videos/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, duration } = req.body;

  await db.update(id, {
    title,
    description,
    duration,
  });

  return res.status(204).send();
});

server.delete("/videos/:id", async (req, res) => {
  const id = req.params.id;

  await db.delete(id);

  return res.status(204).send();
});

server.listen({
  port: 3000,
});
