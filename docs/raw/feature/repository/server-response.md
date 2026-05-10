# ServerResponse<T>

Generic wrapper for API responses with success/error states.

## Class Definition

```typescript
class ServerResponse<T> {
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data?: T;
}
```

## Factory Methods

### `ServerResponse.success(success: ResponseSucess<T>): ServerResponse<T>`

Creates a success response with typed data.

**ResponseSucess<T>**:

```typescript
{
  status: HttpStatusCode;
  statusMessage: string;
  data: T;
}
```

### `ServerResponse.error(error: ResponseError): ServerResponse<T>`

Creates an error response.

**ResponseError**:

```typescript
{
  status: HttpStatusCode;
  statusMessage: string;
}
```

## Usage Pattern

```typescript
const response = await api.get<User[]>("users");

if (response.isSuccess) {
  const users: User[] = response.data;
} else {
  console.error(response.status, response.statusMessage);
}
```
