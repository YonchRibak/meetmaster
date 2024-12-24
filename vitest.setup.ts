import "@testing-library/jest-dom";
import * as navigation from "next/navigation";
import { vi } from "vitest";
import { config } from "dotenv";

// Load environment variables from .env
config();

// Mock Next.js navigation functions
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  })),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));
