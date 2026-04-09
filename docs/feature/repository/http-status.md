# HttpStatusCode

Enum of HTTP status codes used throughout the repository layer.

## Enum Values

| Code                    | Value | Description                   |
| ----------------------- | ----- | ----------------------------- |
| `SUCCESS`               | 200   | Request succeeded             |
| `CREATED`               | 201   | Resource created successfully |
| `BAD_REQUEST`           | 400   | Invalid request parameters    |
| `UNAUTHORIZED`          | 401   | Authentication required       |
| `NOT_FOUND`             | 404   | Resource not found            |
| `INTERNAL_SERVER_ERROR` | 500   | Server-side error             |
| `INTERNET_ERROR`        | 0     | Network connectivity issue    |
| `IDLE`                  | 1000  | State management placeholder  |

## Helper Function

### `getStatusMessage(status: HttpStatusCode, literal: Record<string, string>): string`

Returns localized message for a given status code.

```typescript
const msg = getStatusMessage(HttpStatusCode.SUCCESS, literals);
// Returns: literals['success_message']
```

## Usage

```typescript
import { HttpStatusCode } from "./HttpStatusCode";

if (response.status === HttpStatusCode.SUCCESS) {
  // Handle success
}
```
