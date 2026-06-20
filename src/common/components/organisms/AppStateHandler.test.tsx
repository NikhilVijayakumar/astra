import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ReactNode } from "react";
import AppStateHandler from "./AppStateHandler";
import { AppStateProvider } from "./AppStateContext";
import { StateType, StateCode } from "../../state/AppState";
import { HttpStatusCode } from "../../repo/HttpStatusCode";

const TestProvider = ({ children }: { children: ReactNode }) => (
  <AppStateProvider
    value={{
      Loading: () => <div data-testid="loading-state">Loading...</div>,
      Error: ({ message }) => (
        <div data-testid="error-state">{message || "Error"}</div>
      ),
      Empty: () => <div data-testid="empty-state">Empty</div>,
    }}
  >
    {children}
  </AppStateProvider>
);

describe("AppStateHandler", () => {
  const mockSuccessComponent = ({ appState }: { appState: any }) => (
    <div data-testid="success-component">{JSON.stringify(appState.data)}</div>
  );

  it("renders Loading from context when state is LOADING", () => {
    const appState = {
      state: StateType.LOADING,
      isError: false,
      isSuccess: false,
      status: StateCode.IDLE,
      statusMessage: "",
      data: null,
    };

    render(
      <TestProvider>
        <AppStateHandler appState={appState} SuccessComponent={mockSuccessComponent} />
      </TestProvider>,
    );

    expect(screen.getByTestId("loading-state")).toBeTruthy();
  });

  it("renders loadingComponent slot when provided", () => {
    const appState = {
      state: StateType.LOADING,
      isError: false,
      isSuccess: false,
      status: StateCode.IDLE,
      statusMessage: "",
      data: null,
    };

    render(
      <AppStateHandler
        appState={appState}
        loadingComponent={<div data-testid="custom-loading">Custom loading</div>}
      />,
    );

    expect(screen.getByTestId("custom-loading")).toBeTruthy();
  });

  it("renders Error from context when isError is true", () => {
    const appState = {
      state: StateType.COMPLETED,
      isError: true,
      isSuccess: false,
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusMessage: "Failed",
      data: null,
    };

    render(
      <TestProvider>
        <AppStateHandler
          appState={appState}
          SuccessComponent={mockSuccessComponent}
          errorMessage="Custom Error"
        />
      </TestProvider>,
    );

    const errorState = screen.getByTestId("error-state");
    expect(errorState).toBeTruthy();
    expect(errorState.textContent).toBe("Custom Error");
  });

  it("renders errorComponent slot when provided", () => {
    const appState = {
      state: StateType.COMPLETED,
      isError: true,
      isSuccess: false,
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusMessage: "Failed",
      data: null,
    };

    render(
      <AppStateHandler
        appState={appState}
        errorComponent={<div data-testid="error-state">Slot Error</div>}
      />,
    );

    expect(screen.getByTestId("error-state").textContent).toBe("Slot Error");
  });

  it("renders Error from context when status is INTERNET_ERROR", () => {
    const appState = {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: false,
      status: HttpStatusCode.INTERNET_ERROR,
      statusMessage: "No Internet",
      data: null,
    };

    render(
      <TestProvider>
        <AppStateHandler appState={appState} SuccessComponent={mockSuccessComponent} />
      </TestProvider>,
    );

    expect(screen.getByTestId("error-state")).toBeTruthy();
  });

  it("renders SuccessComponent when state is successful and data is present", () => {
    const data = { id: 1, name: "Test" };
    const appState = {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: "OK",
      data: data,
    };

    render(
      <TestProvider>
        <AppStateHandler appState={appState} SuccessComponent={mockSuccessComponent} />
      </TestProvider>,
    );

    const successComponent = screen.getByTestId("success-component");
    expect(successComponent).toBeTruthy();
    expect(successComponent.textContent).toBe(JSON.stringify(data));
  });

  it("renders Empty from context when emptyCondition is met", () => {
    const data: any[] = [];
    const appState = {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: "OK",
      data: data,
    };

    render(
      <TestProvider>
        <AppStateHandler
          appState={appState}
          SuccessComponent={mockSuccessComponent}
          emptyCondition={(d: any[]) => d.length === 0}
        />
      </TestProvider>,
    );

    expect(screen.getByTestId("empty-state")).toBeTruthy();
  });

  it("renders Empty from context as fallback for INIT state", () => {
    const appState = {
      state: StateType.INIT,
      isError: false,
      isSuccess: false,
      status: StateCode.IDLE,
      statusMessage: "",
      data: null,
    };

    render(
      <TestProvider>
        <AppStateHandler appState={appState} SuccessComponent={mockSuccessComponent} />
      </TestProvider>,
    );

    expect(screen.getByTestId("empty-state")).toBeTruthy();
  });

  it("renders children over SuccessComponent when both provided", () => {
    const data = { id: 1 };
    const appState = {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: "OK",
      data,
    };

    render(
      <TestProvider>
        <AppStateHandler appState={appState} SuccessComponent={mockSuccessComponent}>
          <div data-testid="children-content">children win</div>
        </AppStateHandler>
      </TestProvider>,
    );

    expect(screen.getByTestId("children-content")).toBeTruthy();
    expect(screen.queryByTestId("success-component")).toBeNull();
  });

  it("returns null when no context and no slot for LOADING", () => {
    const appState = {
      state: StateType.LOADING,
      isError: false,
      isSuccess: false,
      status: StateCode.IDLE,
      statusMessage: "",
      data: null,
    };

    const { container } = render(<AppStateHandler appState={appState} />);
    expect(container.firstChild).toBeNull();
  });
});
