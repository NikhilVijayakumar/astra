# Repository Isolation Invariant

## Purpose

Astra enforces a strict Repository pattern for all external communication.

All API calls, network requests, and data access must flow exclusively through Repository abstractions built on `ApiService`. Components, hooks, and ViewModels must never access network APIs directly.

Repository isolation guarantees:
- centralized error handling
- typed response contracts
- swappable data sources
- testable API boundaries
- consistent HTTP status handling
- single-point monitoring and logging

---

## Architectural Rule

External communication must flow only through Repository abstractions.

A Repository may:
- use `ApiService` for HTTP requests
- define typed request/response contracts
- handle error mapping and status code interpretation
- compose multiple API calls into cohesive data operations
- provide domain-specific data methods

A Repository must NOT:
- be imported by components (Views) directly
- contain UI logic or formatting
- know about ViewModel or View structure

Any code outside a Repository may NOT:
- use `axios`, `fetch`, or any HTTP client directly
- access external APIs without going through a Repository
- bypass `ApiService` for network communication
- make raw HTTP requests for data access

---

## Allowed Patterns

### Typed Repository With ApiService

Allowed:

```tsx
import { ApiService, ServerResponse } from 'astra';

const api = new ApiService('https://api.example.com', {
  internal_server_error: 'Something went wrong.',
});

export interface UserResponse {
  id: string;
  name: string;
  email: string;
}

export const UserRepo = {
  getAll: async (): Promise<ServerResponse<UserResponse[]>> => api.get('/users'),

  getById: async (id: string): Promise<ServerResponse<UserResponse>> => api.get(`/users/${id}`),

  create: async (data: CreateUserRequest): Promise<ServerResponse<UserResponse>> =>
    api.post('/users', data),
};
```

Reason:
All network access is centralized, typed, and error-handled.

---

### Composed Repository Operation

Allowed:

```tsx
export const OrderRepo = {
  getFullOrder: async (orderId: string): Promise<ServerResponse<FullOrder>> => {
    const order = await api.get<Order>(`/orders/${orderId}`);
    if (order.isError) return order;

    const items = await api.get<OrderItem[]>(`/orders/${orderId}/items`);
    if (items.isError) return items;

    return ServerResponse.success({
      status: 200,
      statusMessage: 'OK',
      data: { ...order.data, items: items.data },
    });
  },
};
```

Reason:
Repository composes multiple API calls into a cohesive data operation.

---

### Error Mapping in Repository

Allowed:

```tsx
const api = new ApiService('/api', {
  internal_server_error: 'Service unavailable. Please try again.',
  not_found: 'The requested resource was not found.',
  unauthorized: 'Your session has expired. Please login again.',
  bad_request: 'Invalid request. Please check your input.',
});
```

Reason:
Error messages are centralized at the API layer, not scattered across components.

---

### Repository Used by ViewModel Only

Allowed:

```tsx
// ViewModel
import { UserRepo } from '../repo/UserRepo';

export function useUserListViewModel() {
  const [state, execute] = useDataState<User[]>();

  useEffect(() => {
    execute(() => UserRepo.getAll());
  }, []);

  return { users: state.data, isLoading: state.state === StateType.LOADING };
}
```

Reason:
Repository is consumed by the ViewModel layer only — Views never touch it.

---

## Forbidden Patterns

### Direct API Call in Component

Forbidden:

```tsx
function UserList() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('/api/users').then((res) => setUsers(res.data));
  }, []);

  return <div>{users?.map(u => u.name)}</div>;
}
```

Reason:
Bypasses all Repository error handling, typing, and testability.

---

### Raw Fetch in ViewModel

Forbidden:

```tsx
export function useUserViewModel() {
  const [state, setState] = useState();

  const load = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setState(data);
  };

  return { load, state };
}
```

Reason:
ViewModel should use Repository — raw fetch duplicates error handling and bypasses ApiService.

---

### Inline Axios Instance in Service File

Forbidden:

```tsx
// outside repo/ directory
import axios from 'axios';
const api = axios.create({ baseURL: '/api' });
```

Reason:
Axios instances must be created only through `ApiService` inside repository modules.

---

### View Importing Repository Directly

Forbidden:

```tsx
// View.tsx
import { UserRepo } from '../repo/UserRepo';

function UserList() {
  const [data, setData] = useState();
  useEffect(() => {
    UserRepo.getAll().then(setData); // View calling Repo directly
  }, []);
  return <div>...</div>;
}
```

Reason:
View bypasses ViewModel — couples presentation to data layer.

---

### Repository Importing UI Concerns

Forbidden:

```tsx
// repo/UserRepo.ts
import { UserCard } from '../components/UserCard';
import { useTheme } from 'astra';
```

Reason:
Repository must not know about UI — data access is infrastructure, not presentation.

---

### Direct HTTP Client Outside Repository

Forbidden:

```tsx
// services/notificationService.ts (outside repo/)
import axios from 'axios';

export const sendNotification = async (message: string) => {
  await axios.post('/api/notify', { message });
};
```

Reason:
All HTTP communication must funnel through Repository abstractions.

---

### Unwrapped Response Handling

Forbidden:

```tsx
export const UserRepo = {
  getAll: async () => {
    const res = await axios.get('/api/users');
    return res.data; // raw response without ServerResponse wrapper
  },
};
```

Reason:
Repository must return typed `ServerResponse` for consistent consumer handling.

---

## Detection Heuristics

### Direct HTTP Usage

Detect:

```tsx
axios.get
axios.post
axios.put
axios.delete
fetch(
```

outside of `repo/` directory files.

---

### ApiService Usage Outside Repo

Detect:

```tsx
ApiService
new ApiService
```

inside component, hook, or viewmodel files (outside `repo/` directory).

---

### Raw Response Returns

Detect repositories that return data without `ServerResponse` wrapping:

```tsx
return res.data
return data
return response
```

without `ServerResponse.success()` or `ServerResponse.error()`.

---

### HTTP Client Imports Outside Repo

Detect:

```tsx
import axios from 'axios'
```

in files outside the `repo/` directory.

---

### View Files Importing From Repo

Detect:

```tsx
import { ...Repo } from '../repo/'
```

inside component/view files (.tsx).

---

### Repository Importing From UI

Detect:

```tsx
import ... from '../components/'
import ... from '../hooks/'
```

inside repository files.

---

## Severity Levels

### P0 — Critical

Direct HTTP access exists outside Repository layer.

Examples:

- axios/fetch in components
- raw API calls in ViewModel
- network access bypassing ApiService

Must fix before release.

---

### P1 — High

Repository boundary partially violated.

Examples:

- View importing Repository directly
- Repository returning raw (unwrapped) responses
- HTTP client instance outside repo directory

Must migrate.

---

### P2 — Transitional

Legacy code with documented Repository bypass.

Examples:

- existing service files that need migration to repo pattern
- temporary direct access with migration plan

Allowed temporarily only.

---

### P3 — Informational

All external communication flows through typed Repositories.

No action required.

---

## Refactoring Guidance

### Replace Direct Axios With Repository

BAD:

```tsx
// component code
const res = await axios.get('/api/users');
setUsers(res.data);
```

GOOD:

```tsx
// repo/UserRepo.ts
export const UserRepo = {
  getAll: () => api.get<User[]>('/users'),
};

// ViewModel
const [state, execute] = useDataState<User[]>();
useEffect(() => { execute(() => UserRepo.getAll()); }, []);
```

---

### Wrap Raw Responses in ServerResponse

BAD:

```tsx
export const UserRepo = {
  getAll: async () => {
    const res = await axios.get('/api/users');
    return res.data;
  },
};
```

GOOD:

```tsx
export const UserRepo = {
  getAll: () => api.get<User[]>('/users'),
};
```

where `api.get` already returns `ServerResponse<T>`.

---

### Move HTTP Access Into Repository

BAD:

```tsx
// hooks/useUserData.ts
import axios from 'axios';
```

GOOD:

```tsx
// repo/UserRepo.ts
export const UserRepo = { ... };

// hooks/useUserData.ts — imports UserRepo, not axios
```

---

### Remove Repository Imports From Views

BAD:

```tsx
// View.tsx
import { UserRepo } from '../repo/UserRepo';
```

GOOD:

```tsx
// View.tsx — uses ViewModel, not Repo directly
import { useUserListViewModel } from './useUserListViewModel';
```

---

## Library Impact

Violating Repository Isolation causes:

- scattered error handling (inconsistent user-facing messages)
- untestable data access (mocking required in view tests)
- impossible data source swapping (tight coupling to HTTP)
- duplicated HTTP configuration across files
- inconsistent response handling patterns
- security gaps (unvalidated responses)
- monitoring blind spots (distributed API calls)

Without Repository Isolation:
Astra becomes an untestable web of direct network dependencies
instead of a maintainable, testable data access architecture.

---

## Migration Notes

### Transitional Repository Bypass Must Include

```tsx
/**
 * @deprecated-direct-access
 * Target: <what API endpoint>
 * Repository: <target repository>
 * Reason: <why direct>
 * Removal target: <version>
 */
```

---

### Migration Strategy

1. Identify all direct HTTP calls (axios, fetch) outside repo/
2. Create/update Repository with typed ApiService methods
3. Replace direct calls with Repository calls in ViewModels
4. Remove HTTP client imports from non-repo files
5. Verify error handling is consistent after migration

---

## Validation Requirements

A data access layer is compliant only if:

- no axios/fetch calls exist outside repo/ directory
- all ApiService instances live inside repository files
- all repositories return typed ServerResponse
- no View imports Repository directly
- no Repository imports UI components or hooks
- error messages are centralized in ApiService configuration
- data sources can be swapped by replacing a Repository implementation

---

## Compliance Goal

Astra components must behave as:

- Repository-gated data accessors
- ApiService-routed network communicators
- typed-response consumers
- ViewModel-mediated data users

NOT:

- raw HTTP callers
- direct network requestors
- untyped response handlers
- view-coupled data accessors
```
