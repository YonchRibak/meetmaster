import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ClerkProvider, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

describe("SignUp Component", () => {
  it("renders social signup options", () => {
    render(
      <ClerkProvider>
        <SignUp />
      </ClerkProvider>
    );

    const socialSignups = [
      /continue with google/i,
      /continue with microsoft/i,
      /continue with apple/i,
    ];

    socialSignups.forEach((signupText) => {
      expect(screen.getByText(signupText)).toBeTruthy();
    });
  });
});
