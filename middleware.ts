import { type RouterMiddleware } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export const PalindromeMiddleware: RouterMiddleware<"/:word"> = (ctx) => {
  const { word } = ctx.params;

  const reversed = [...word].reverse().join("");
  const result = reversed === word;

  ctx.response.headers.set("Content-Type", "application/json");
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Headers", "*");

  ctx.response.body = { reversed, result };
};
