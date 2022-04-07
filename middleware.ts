import type { RouterMiddleware, Middleware } from "./deps.ts";

export const CORSMiddleware: Middleware = async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "*");
  ctx.response.headers.set("Access-Control-Allow-Headers", "*");
  await next();
};

export const PalindromeMiddleware: RouterMiddleware<"/:word"> = (ctx) => {
  const { word } = ctx.params;

  const reversed = [...word].reverse().join("");
  const result = reversed === word;

  ctx.response.body = { reversed, result };
};

export const DocsMiddleware: RouterMiddleware<"/"> = (context) => {
  context.response.redirect(
    "https://github.com/UltiRequiem/palindrome-api#endpoints"
  );
};
