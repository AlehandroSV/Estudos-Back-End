import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map((video) => {
        const id = video[0];
        const data = video[1];

        return {
          ...data,
          id: id,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }

        return true;
      });
  }

  create(video) {
    const videId = randomUUID().toString();

    return this.#videos.set(videId, video);
  }

  update(id, video) {
    return this.#videos.set(id, video);
  }

  delete(id) {
    return this.#videos.delete(id);
  }
}
