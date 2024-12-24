import { describe, it, expect } from "vitest";
import { PrismaClient } from "@prisma/client";

describe("User Database Integration", () => {
  const prisma = new PrismaClient();

  it("creates user in database after Clerk signup", async () => {
    const mockUser = {
      id: "unique_test_user_id_" + Date.now(), // Ensure unique ID
      emailAddresses: [{ emailAddress: "test_" + Date.now() + "@example.com" }],
      firstName: "Test",
      lastName: "User",
    };

    const dbUser = await prisma.user.create({
      data: {
        clerkId: mockUser.id,
        email: mockUser.emailAddresses[0].emailAddress,
        name: `${mockUser.firstName} ${mockUser.lastName}`,
        timezone: "Asia/Jerusalem",
      },
    });

    expect(dbUser.clerkId).toBe(mockUser.id);
  });
});
