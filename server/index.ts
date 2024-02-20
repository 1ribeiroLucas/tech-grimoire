import { Server } from "bun";

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
        return new Response(Bun.file("./client/pages/homepage/index.html"), {
          headers: { "Content-Type": "text/html" },
          status: 200,
        });
      default:
        return new Response("404");
    }
  },
});

export { server };
