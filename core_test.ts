import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";
import { reverse } from "./core.ts";

Deno.test("Assert correct Palindrome", () => {
  const palindromes = ["yey", "lol", "civic", "level", "radar"];

  for (const word of palindromes) {
    assertEquals(reverse(word), word);
  }
});
