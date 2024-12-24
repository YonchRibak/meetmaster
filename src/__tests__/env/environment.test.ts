import { test, expect } from "vitest";

test("Environment variables are loaded", () => {
  expect(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY).toBeDefined();
  expect(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY).toBe(
    "pk_test_ZW5vdWdoLWxhZHliaXJkLTkyLmNsZXJrLmFjY291bnRzLmRldiQ"
  );
});
