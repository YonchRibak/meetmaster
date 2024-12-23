import { describe, it, expect } from "vitest";
import { PrismaClient } from "@prisma/client";

describe("User Database Integration", () => {
  const prisma = new PrismaClient();

  it("creates user in database after Clerk signup", async () => {
    const mockUser = {
      id: "user_123",
      emailAddresses: [{ emailAddress: "test@example.com" }],
      firstName: "Test",
      lastName: "User",
    };

    const dbUser = await prisma.user.create({
      data: {
        clerkId: mockUser.id,
        email: mockUser.emailAddresses[0].emailAddress,
        name: `${mockUser.firstName} ${mockUser.lastName}`,
        timezone: "Asia/Jerusalem", // default timezone
      },
    });

    expect(dbUser.clerkId).toBe("user_123");
    expect(dbUser.email).toBe("test@example.com");
    expect(dbUser.timezone).toBe("Asia/Jerusalem");
  });
});
