import { serve, file } from "bun";

function appServer(port: number): void {
  serve({
    port,
    fetch(req: Request): Response | Promise<Response> {
      const path = new URL(req.url).pathname;

      const init: ResponseInit = {
        headers: {
          "Content-Type": "text/html"
        },
        status: 200,
        statusText: "Uma dádiva dos ninjas.",
      }

      switch (path) {
        case '/algoritmos':
          return new Response(file("./client/pages/algorithms/index.html"), init);
        case '/estruturas-de-dados':
          return new Response(file("./client/pages/data-structures/index.html"), init);
        default:
          return new Response(file("./client/pages/homepage/index.html"), init);
      }
    },
  });
}

export { appServer };
