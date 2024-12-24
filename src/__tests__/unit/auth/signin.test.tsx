import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

describe("SignIn Component", () => {
  it("renders social login options", () => {
    render(
      <ClerkProvider>
        <SignIn />
      </ClerkProvider>
    );

    const socialLogins = [
      /continue with google/i,
      /continue with microsoft/i,
      /continue with apple/i,
    ];

    socialLogins.forEach((loginText) => {
      expect(screen.getByText(loginText)).toBeTruthy();
    });
  });
});
