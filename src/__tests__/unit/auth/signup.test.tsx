import { render, screen } from "@testing-library/react";
import { SignUp } from "@clerk/nextjs";
import { describe, it, expect } from "vitest";

describe("SignUp Component", () => {
  it("renders social signup options", () => {
    render(<SignUp />);

    const socialSignups = [
      /continue with google/i,
      /continue with microsoft/i,
      /continue with apple/i,
    ];

    socialSignups.forEach((signupText) => {
      expect(screen.getByText(signupText)).toBeTruthy();
    });
  });

  it("does not show email signup", () => {
    render(<SignUp />);
    expect(screen.queryByText(/continue with email/i)).toBeNull();
  });
});
