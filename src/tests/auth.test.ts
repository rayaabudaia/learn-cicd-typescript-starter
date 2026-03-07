import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { Request } from "express";

// Helper function to create a mock Request object
const createMockRequest = (authHeader?: string): Partial<Request> => {
  return {
    get: (name: string) => {
      if (name === "Authorization") {
        return authHeader;
      }
      return undefined;
    },
  } as Partial<Request>;
};

describe("getAPIKey", () => {
  test("returns API key when valid Authorization header is provided", () => {
    const mockReq = createMockRequest("ApiKey my-secret-key-123") as Request;
    const result = getAPIKey(mockReq);
    expect(result).toBe("my-secret-key-123");
  });

  test("throws error when Authorization header is missing", () => {
    const mockReq = createMockRequest() as Request;
    expect(() => getAPIKey(mockReq)).toThrow("No authorization header");
  });

  test("throws error when Authorization header has invalid format", () => {
    const mockReq = createMockRequest("InvalidFormat") as Request;
    expect(() => getAPIKey(mockReq)).toThrow(
      "Invalid authorization header format",
    );
  });

  test("throws error when Authorization header is not ApiKey type", () => {
    const mockReq = createMockRequest("Bearer some-token") as Request;
    expect(() => getAPIKey(mockReq)).toThrow(
      "Invalid authorization header format",
    );
  });

  test("throws error when Authorization header has extra parts", () => {
    const mockReq = createMockRequest("ApiKey key extra-part") as Request;
    expect(() => getAPIKey(mockReq)).toThrow(
      "Invalid authorization header format",
    );
  });
});
