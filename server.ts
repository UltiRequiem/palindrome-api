import { Application, Router } from "./deps.ts";

import { PalindromeMiddleware, DocsMiddleware, CORSMiddleware } from "./middleware.ts";

const app = new Application();

app.use(CORSMiddleware);

const router = new Router();

router.get("/:word", PalindromeMiddleware);
router.get("/", DocsMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
