import { Application, Router, oakCors } from "./deps.ts";

import { PalindromeMiddleware, DocsMiddleware } from "./middleware.ts";

const app = new Application();

app.use(oakCors({ origin: "*" }));

const router = new Router();

router.get("/:word", PalindromeMiddleware);
router.get("/", DocsMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8000;

app.listen({ port: 8000 });

console.log(`Check https://localhost:${PORT}`);
