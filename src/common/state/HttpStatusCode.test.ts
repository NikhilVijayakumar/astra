import { describe, it, expect } from 'vitest';
import { HttpStatusCode, getStatusMessage } from './HttpStatusCode';

const literal = {
  success_message: 'Success',
  created_message: 'Created',
  bad_request_message: 'Bad Request',
  unauthorized_message: 'Unauthorized',
  not_found_message: 'Not Found',
  internal_server_error: 'Internal Server Error',
  internet_error: 'No Internet',
  idle_message: 'Idle',
};

describe('HttpStatusCode', () => {
  it('has correct numeric values', () => {
    expect(HttpStatusCode.SUCCESS).toBe(200);
    expect(HttpStatusCode.CREATED).toBe(201);
    expect(HttpStatusCode.BAD_REQUEST).toBe(400);
    expect(HttpStatusCode.UNAUTHORIZED).toBe(401);
    expect(HttpStatusCode.NOT_FOUND).toBe(404);
    expect(HttpStatusCode.INTERNAL_SERVER_ERROR).toBe(500);
    expect(HttpStatusCode.INTERNET_ERROR).toBe(0);
    expect(HttpStatusCode.IDLE).toBe(1000);
  });
});

describe('getStatusMessage', () => {
  it('returns correct message for each known status code', () => {
    expect(getStatusMessage(HttpStatusCode.SUCCESS, literal)).toBe('Success');
    expect(getStatusMessage(HttpStatusCode.CREATED, literal)).toBe('Created');
    expect(getStatusMessage(HttpStatusCode.BAD_REQUEST, literal)).toBe('Bad Request');
    expect(getStatusMessage(HttpStatusCode.UNAUTHORIZED, literal)).toBe('Unauthorized');
    expect(getStatusMessage(HttpStatusCode.NOT_FOUND, literal)).toBe('Not Found');
    expect(getStatusMessage(HttpStatusCode.INTERNAL_SERVER_ERROR, literal)).toBe('Internal Server Error');
    expect(getStatusMessage(HttpStatusCode.INTERNET_ERROR, literal)).toBe('No Internet');
    expect(getStatusMessage(HttpStatusCode.IDLE, literal)).toBe('Idle');
  });

  it('returns empty string for unknown status code', () => {
    expect(getStatusMessage(999 as HttpStatusCode, literal)).toBe('');
  });

  it('returns empty string when literal key is missing', () => {
    expect(getStatusMessage(999 as HttpStatusCode, {})).toBe('');
  });
});
