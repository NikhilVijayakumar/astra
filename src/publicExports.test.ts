import { describe, expect, it } from "vitest";
import * as Astra from "./lib";
import {
  AppStateHandler,
  AppStateProvider,
  AppStateContext,
  ApiService,
  ServerResponse,
  HttpStatusCode,
  StateType,
  StateCode,
} from "./lib";

describe("root public exports", () => {
  it("exports AppStateHandler and AppStateProvider", () => {
    expect(Astra).toHaveProperty("AppStateHandler");
    expect(Astra).toHaveProperty("AppStateProvider");
    expect(AppStateHandler).toBeTypeOf("function");
    expect(AppStateProvider).toBeDefined();
  });

  it("exports AppStateContext and AppStateComponents type", () => {
    expect(Astra).toHaveProperty("AppStateContext");
    expect(AppStateContext).toBeDefined();
  });

  it("exports core state types", () => {
    expect(Astra).toHaveProperty("StateType");
    expect(Astra).toHaveProperty("StateCode");
    expect(StateType.INIT).toBe(0);
    expect(StateType.LOADING).toBe(1);
    expect(StateType.COMPLETED).toBe(2);
    expect(StateCode.IDLE).toBe(1000);
  });

  it("exports API layer", () => {
    expect(Astra).toHaveProperty("getApiService");
    expect(Astra).toHaveProperty("HttpStatusCode");
    expect(Astra).toHaveProperty("getStatusMessage");
    expect(Astra).toHaveProperty("ApiService");
    expect(Astra).toHaveProperty("ServerResponse");
  });

  it("exports useDataState hook", () => {
    expect(Astra).toHaveProperty("useDataState");
    expect(Astra.useDataState).toBeTypeOf("function");
  });

  it("HttpStatusCode enum has expected values", () => {
    expect(HttpStatusCode.SUCCESS).toBe(200);
    expect(HttpStatusCode.CREATED).toBe(201);
    expect(HttpStatusCode.BAD_REQUEST).toBe(400);
    expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
    expect(HttpStatusCode.NOT_FOUND).toBe(404);
    expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
    expect(HttpStatusCode.INTERNET_ERROR).toBe(0);
  });

  it("ApiService can be instantiated", () => {
    const api = new ApiService("https://api.example.com", {});
    expect(api).toBeDefined();
    expect(api.get).toBeTypeOf("function");
    expect(api.post).toBeTypeOf("function");
    expect(api.put).toBeTypeOf("function");
    expect(api.delete).toBeTypeOf("function");
  });

  it("ServerResponse factory methods produce correct shape", () => {
    const success = ServerResponse.success({
      status: HttpStatusCode.SUCCESS,
      statusMessage: "OK",
      data: { id: 1 },
    });
    expect(success.isSuccess).toBe(true);
    expect(success.isError).toBe(false);
    expect(success.data).toEqual({ id: 1 });

    const error = ServerResponse.error({
      status: HttpStatusCode.NOT_FOUND,
      statusMessage: "Not Found",
    });
    expect(error.isError).toBe(true);
    expect(error.isSuccess).toBe(false);
    expect(error.data).toBeUndefined();
  });

  it("does not export internal types (ResponseSuccess, ResponseError)", () => {
    expect(Astra).not.toHaveProperty("ResponseSuccess");
    expect(Astra).not.toHaveProperty("ResponseError");
    expect(Astra).not.toHaveProperty("ResponseSucess");
  });
});
