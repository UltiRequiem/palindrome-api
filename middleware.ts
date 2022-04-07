import type { RouterMiddleware } from "./deps.ts";

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
