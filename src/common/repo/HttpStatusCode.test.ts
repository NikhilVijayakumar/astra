import { describe, it, expect } from "vitest";
import { HttpStatusCode, getStatusMessage } from "./HttpStatusCode";

describe("HttpStatusCode", () => {
  it("has SUCCESS code 200", () => {
    expect(HttpStatusCode.SUCCESS).toBe(200);
  });

  it("has CREATED code 201", () => {
    expect(HttpStatusCode.CREATED).toBe(201);
  });

  it("has BAD_REQUEST code 400", () => {
    expect(HttpStatusCode.BAD_REQUEST).toBe(400);
  });

  it("has UNAUTHORIZED code 401", () => {
    expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
  });

  it("has NOT_FOUND code 404", () => {
    expect(HttpStatusCode.NOT_FOUND).toBe(404);
  });

  it("has INTERNAL_SERVER_ERROR code 500", () => {
    expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
  });

  it("has INTERNET_ERROR code 0", () => {
    expect(HttpStatusCode.INTERNET_ERROR).toBe(0);
  });

  it("has IDLE code 1000", () => {
    expect(HttpStatusCode.IDLE).toBe(1000);
  });
});

describe("getStatusMessage", () => {
  const literals: Record<string, string> = {
    success_message: "Success",
    created_message: "Created",
    bad_request_message: "Bad Request",
    unauthorized_message: "Unauthorized",
    not_found_message: "Not Found",
    internal_server_error: "Server Error",
    internet_error: "No Internet",
    idle_message: "Idle",
    unknown_message: "Unknown",
  };

  it("returns success message for SUCCESS", () => {
    expect(getStatusMessage(HttpStatusCode.SUCCESS, literals)).toBe("Success");
  });

  it("returns created message for CREATED", () => {
    expect(getStatusMessage(HttpStatusCode.CREATED, literals)).toBe("Created");
  });

  it("returns bad request message", () => {
    expect(getStatusMessage(HttpStatusCode.BAD_REQUEST, literals)).toBe(
      "Bad Request",
    );
  });

  it("returns unauthorized message", () => {
    expect(getStatusMessage(HttpStatusCode.UNAUTHORIZED, literals)).toBe(
      "Unauthorized",
    );
  });

  it("returns not found message", () => {
    expect(getStatusMessage(HttpStatusCode.NOT_FOUND, literals)).toBe(
      "Not Found",
    );
  });

  it("returns server error message", () => {
    expect(
      getStatusMessage(HttpStatusCode.INTERNAL_SERVER_ERROR, literals),
    ).toBe("Server Error");
  });

  it("returns internet error message", () => {
    expect(getStatusMessage(HttpStatusCode.INTERNET_ERROR, literals)).toBe(
      "No Internet",
    );
  });

  it("returns idle message", () => {
    expect(getStatusMessage(HttpStatusCode.IDLE, literals)).toBe("Idle");
  });

  it("returns unknown message for unrecognized status", () => {
    expect(getStatusMessage(999 as HttpStatusCode, literals)).toBe("Unknown");
  });
});
