import { render, screen } from "@testing-library/react";
import { SignIn } from "@clerk/nextjs";
import { describe, it, expect } from "vitest";

describe("SignIn Component", () => {
  it("renders social login options", () => {
    render(<SignIn />);

    const socialLogins = [
      /continue with google/i,
      /continue with microsoft/i,
      /continue with apple/i,
    ];

    socialLogins.forEach((loginText) => {
      expect(screen.getByText(loginText)).toBeTruthy();
    });
  });

  it("does not show email login", () => {
    render(<SignIn />);
    expect(screen.queryByText(/continue with email/i)).toBeNull();
  });
});
