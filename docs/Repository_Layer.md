# Repository & API Layer

The repository layer abstracts all network interactions, ensuring consistent error handling and response formatting across the application. It is built on top of `axios`.

## Core Components

### 1. ApiService (`src/common/repo/ApiService.ts`)

The `ApiService` class is a generic wrapper for HTTP methods. It enforces a strict output format (`ServerResponse<T>`) so consumers never have to deal with raw `AxiosResponse` or `try-catch` blocks for basic networking errors.

#### Initialization
```typescript
const api = new ApiService(baseUrl, literalMap);
```
- **`baseUrl`**: The root URL of your API.
- **`literalMap`**: A key-value map for localized error messages (e.g., fallback for "Internal Server Error").

#### Methods
- `get<T>(url, config?)`
- `post<T>(url, data?, config?)`
- `put<T>(url, data?, config?)`
- `delete<T>(url, config?)`

#### Error Handling Logic
The `request` method automatically catches errors:
- If it's an **Axios Error**: Extracts the status code and message from the response.
- If it's a **Network/Unknown Error**: Defaults to 500 Internal Server Error using the `literalMap`.

---

### 2. ServerResponse (`src/common/repo/ServerResponse.ts`)

A standardized wrapper class that normalizes the outcome of an API call.

```typescript
export class ServerResponse<T> {
  public isError: boolean;
  public isSuccess: boolean;
  public status: HttpStatusCode;
  public statusMessage: String;
  public data?: T;
  
  // Factory methods
  static success<T>(result: ResponseSuccess<T>): ServerResponse<T>;
  static error<T>(error: ResponseError): ServerResponse<T>;
}
```

This ensures that whether the server returns 200, 400, or 500, the UI receives the same shape of object and can simply check `isSuccess` or `isError`.

---

### 3. APITypes & HttpStatusCode

#### HttpStatusCode Enum
Standard HTTP codes (`OK = 200`, `BAD_REQUEST = 400`, etc.) to avoid magic numbers in the code.

#### Response Objects
```typescript
export type ResponseSuccess<T> = {
  status: HttpStatusCode;
  statusMessage: string;
  data: T;
};

export type ResponseError = {
  status: HttpStatusCode;
  statusMessage: string;
};
```

## Best Practices

1.  **Repository Pattern**: Do not call `api.get` directly in components. Define a Repository object that exposes domain-specific methods.
    ```typescript
    // Good
    AuthRepo.login(credentials);
    
    // Avoid
    api.post('/auth/login', credentials);
    ```

2.  **Type Safety**: Always pass the expected response type to the generic method.
    ```typescript
    api.get<UserProfile>('me');
    ```
