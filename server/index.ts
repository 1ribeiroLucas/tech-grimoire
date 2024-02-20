import type { Server } from "bun";
import type { BodyInit } from "undici-types";

const server: Server = Bun.serve({
  port: 1234,

  async fetch(request) {
    const path = new URL(request.url).pathname;

    switch (path) {
      case "/sobre":
        return new Response("Sobre mim");
      case "/textos":
        return new Response("Textos");
      case "/projetos":
        return new Response("Projetos");
      case "/utilidades":
        return new Response("Utilidades");
      case "/":
        return new Response("Início");
      default:
        return new Response("404");
    }
  },
});

export { server };
