import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ClerkProvider, SignIn, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

describe("Authentication Flow", () => {
  it("allows navigation between sign in and sign up pages", () => {
    render(
      <ClerkProvider>
        <SignIn />
      </ClerkProvider>
    );

    const signUpLink = screen.getByText(/sign up/i);
    fireEvent.click(signUpLink);

    render(
      <ClerkProvider>
        <SignUp />
      </ClerkProvider>
    );

    const socialMethods = [
      /continue with google/i,
      /continue with microsoft/i,
      /continue with apple/i,
    ];

    socialMethods.forEach((method) => {
      expect(screen.getByText(method)).toBeTruthy();
    });
  });
});
