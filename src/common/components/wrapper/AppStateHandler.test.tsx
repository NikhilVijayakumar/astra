import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AppStateHandler from './AppStateHandler';
import { StateType } from '../../state/AppState';
import { HttpStatusCode } from '../../repo/HttpStatusCode';

// Mock child components to verify they are rendered correctly
vi.mock('./LoadingState', () => ({
  default: () => <div data-testid="loading-state">Loading...</div>,
}));
vi.mock('./ErrorState', () => ({
  default: ({ message }: { message?: string }) => (
    <div data-testid="error-state">{message || 'Error'}</div>
  ),
}));
vi.mock('./EmptyState', () => ({
  default: () => <div data-testid="empty-state">Empty</div>,
}));

describe('AppStateHandler', () => {
  const mockSuccessComponent = ({ appState }: { appState: any }) => (
    <div data-testid="success-component">{JSON.stringify(appState.data)}</div>
  );

  it('renders LoadingState when state is LOADING', () => {
    const appState = {
      state: StateType.LOADING,
      isError: false,
      isSuccess: false,
      status: HttpStatusCode.IDLE,
      statusMessage: '',
      data: null,
    };

    render(
      <AppStateHandler
        appState={appState}
        SuccessComponent={mockSuccessComponent}
      />
    );

    expect(screen.getByTestId('loading-state')).toBeTruthy();
  });

  it('renders ErrorState when isError is true', () => {
    const appState = {
      state: StateType.COMPLETED,
      isError: true,
      isSuccess: false,
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      statusMessage: 'Failed',
      data: null,
    };

    render(
      <AppStateHandler
        appState={appState}
        SuccessComponent={mockSuccessComponent}
        errorMessage="Custom Error"
      />
    );

    const errorState = screen.getByTestId('error-state');
    expect(errorState).toBeTruthy();
    expect(errorState.textContent).toBe('Custom Error');
  });

  it('renders ErrorState when status is INTERNET_ERROR', () => {
    const appState = {
      state: StateType.COMPLETED,
      isError: false, // Even if isError is false, specific status might trigger error
      isSuccess: false,
      status: HttpStatusCode.INTERNET_ERROR,
      statusMessage: 'No Internet',
      data: null,
    };

    render(
      <AppStateHandler
        appState={appState}
        SuccessComponent={mockSuccessComponent}
      />
    );

    expect(screen.getByTestId('error-state')).toBeTruthy();
  });

  it('renders SuccessComponent when state is successful and data is present', () => {
    const data = { id: 1, name: 'Test' };
    const appState = {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'OK',
      data: data,
    };

    render(
      <AppStateHandler
        appState={appState}
        SuccessComponent={mockSuccessComponent}
      />
    );

    const successComponent = screen.getByTestId('success-component');
    expect(successComponent).toBeTruthy();
    expect(successComponent.textContent).toBe(JSON.stringify(data));
  });

  it('renders EmptyState when emptyCondition is met', () => {
    const data: any[] = [];
    const appState = {
      state: StateType.COMPLETED,
      isError: false,
      isSuccess: true,
      status: HttpStatusCode.SUCCESS,
      statusMessage: 'OK',
      data: data,
    };

    render(
      <AppStateHandler
        appState={appState}
        SuccessComponent={mockSuccessComponent}
        emptyCondition={(d) => d.length === 0}
      />
    );

    expect(screen.getByTestId('empty-state')).toBeTruthy();
  });

  it('renders EmptyState as fallback for idle or null data states', () => {
    const appState = {
      state: StateType.INIT,
      isError: false, // Not error
      isSuccess: false, // Not success
      status: HttpStatusCode.IDLE,
      statusMessage: '',
      data: null,
    };

    render(
      <AppStateHandler
        appState={appState}
        SuccessComponent={mockSuccessComponent}
      />
    );

    expect(screen.getByTestId('empty-state')).toBeTruthy();
  });
});
