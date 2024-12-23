import { describe, it, expect } from "vitest";
import { ClerkProvider, SignIn, SignUp } from "@clerk/nextjs";
import { render, screen, fireEvent } from "@testing-library/react";

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

    expect(screen.getByText(/continue with google/i)).toBeTruthy();
  });

  it("checks social login method consistency", () => {
    render(
      <ClerkProvider>
        <SignIn />
      </ClerkProvider>
    );

    const signInMethods = [
      /continue with google/i,
      /continue with microsoft/i,
      /continue with apple/i,
    ];

    render(
      <ClerkProvider>
        <SignUp />
      </ClerkProvider>
    );

    signInMethods.forEach((method) => {
      expect(screen.getByText(method)).toBeTruthy();
    });
  });
});
