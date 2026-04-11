import { describe, expect, it } from "vitest";
import * as Astra from "./lib";
import {
  AppStateHandler,
  EmptyState,
  ErrorState,
  LoadingState,
} from "./lib";

describe("root public exports", () => {
  it("exports AppStateHandler and default-only state components", () => {
    expect(Astra).toHaveProperty("AppStateHandler");
    expect(Astra).toHaveProperty("LoadingState");
    expect(Astra).toHaveProperty("ErrorState");
    expect(Astra).toHaveProperty("EmptyState");

    expect(AppStateHandler).toBeTypeOf("function");
    expect(LoadingState).toBeTypeOf("function");
    expect(ErrorState).toBeTypeOf("function");
    expect(EmptyState).toBeTypeOf("function");
  });
});
