import { Application, Router } from "./deps.ts";

import { PalindromeMiddleware } from "./middleware.ts";

const app = new Application();

const router = new Router();

router.get("/:word", PalindromeMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
