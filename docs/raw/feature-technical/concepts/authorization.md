# Authorization Model: Feature Technical

## 1. Technical Overview

The authorization model defines visibility levels (Public, Authenticated, Role-restricted, Owner-only), action permissions (View, Create, Edit, Delete, Configure, Share), ownership rules, and delegation rules. It is a cross-cutting configuration contract — it defines the rules but does not enforce them at runtime. Enforcement is the responsibility of each feature. The model does not manage authentication, session management, role assignment, or user management. Unauthenticated users cannot perform mutating actions. Role-restricted actions require explicit role assignment. Owner-scoped actions are limited to the resource creator.

## 2. Architecture Realization

| Feature Spec Concept | Architecture Implementation |
|---|---|
| Visibility levels | Configuration contract — no runtime enforcement by Astra |
| Action permissions | Documented per role — features implement their own enforcement |
| Ownership rules | Resource creator is owner — tracked by consumer app |
| Delegation rules | Temporary access grants with configurable expiry — consumer-managed |
| Cross-cutting reference | Every feature doc references authorization rules in its "Authorization" section |

**Authorization integration in feature docs:**

Each feature spec has an `## Authorization` section that declares its visibility level:

```markdown
## Authorization
**Visibility:** Public — language switching is available to all users regardless of authentication state.
```

**Enforcement boundaries:**

| Layer | Authorization Role |
|---|---|
| Feature docs | Declare visibility and permitted actions |
| Consumer app | Implements enforcement (guards, role checks, permission gates) |
| Astra library | Provides no auth primitives — stateless UI library |

## 3. Data Flow

```
Access request to feature or resource
       ↓
1. Identify resource and requested action
       ↓
2. Determine visibility level of resource (from feature doc)
       ↓
3. Determine action permissions for user's role (consumer-managed)
       ↓
4. Check ownership if owner-scoped (consumer-managed)
       ↓
5. Grant or deny access
```

**Visibility resolution (consumer-implemented):**

```
Public: No check required → feature accessible
Authenticated: Requires valid session → gate at router/component level
Role-restricted: Requires specific role → role-check middleware
Owner-only: Requires resource ownership → ID comparison
```

## 4. State Management

Authorization states are managed by the consumer app, not by Astra.

| State | Description | Transition |
|---|---|---|
| Unauthenticated | No user identity | Login → Authenticated |
| Authenticated | Identity confirmed | Logout → Unauthenticated; Role grant → Role-restricted |
| Escalated | Admin override active | Manual admin action; Duration-limited |
| Denied | Access check failed | Re-authentication or permission request |
| Delegated | Temporary access granted | Expires after configured duration → base permissions |

**State transitions:**

```
Unauthenticated ──login──→ Authenticated ──role grant──→ Role-restricted
                                    │
                                    ├──admin override──→ Escalated
                                    ├──deny──→ Denied
                                    └──delegate──→ Delegated ──expiry──→ Authenticated
```

## 5. Styling Implementation

Authorization does not affect styling. All components render regardless of authorization state — visibility is controlled by the consumer app's rendering logic, not by conditional styling. A denied-access state may render an error component (consumer's responsibility) which should use theme tokens for consistent appearance.

## 6. Interaction Design

| Action | Unauthenticated | Authenticated | Role-restricted | Owner-only |
|---|---|---|---|---|
| View | Public features only | All visible per role | If role matches | If resource owner |
| Create | Denied | If role permits | If role matches | N/A |
| Edit | Denied | If role permits | If role matches | If resource owner |
| Delete | Denied | If role permits | If role matches | If resource owner |
| Configure | Denied | Denied | Admin only | Admin only |
| Share | Denied | Denied | If role permits | If resource owner |

**Failure feedback:** Denied actions should provide clear denial reason (consumer-implemented).

## 7. Accessibility Implementation

- Denial feedback must be communicated to screen readers via `aria-live` or `role="alert"`
- Permission-restricted UI elements should use `aria-disabled` (not `disabled`) to communicate unavailability while remaining focusable
- Feature visibility changes must be announced to assistive technology
- Authentication-required features must convey login requirement accessibly
- Error messages for denied access must be localized

## 8. Error Handling

| Condition | Behavior |
|---|---|
| Resource with no owner | Mutating actions denied; view-only follows visibility rules |
| Role not found | Default to most restrictive — deny access |
| Expired delegation | Access reverts to delegatee's base permissions |
| Permission config missing | Default to most restrictive policy for affected feature |
| Admin overriding owner action | Admin override takes precedence; owner access not revoked |
| Concurrent delegations | Independent — revoking one does not affect others |

**Edge case handling:**

```typescript
// Consumer implementation example
function getEffectivePermission(resource: Resource, user: User): Permission {
  if (!user) return { allowed: false, reason: 'authentication_required' };
  if (!resource.owner) return { allowed: false, reason: 'no_owner' };
  if (user.role === 'admin') return { allowed: true, escalated: true };
  if (user.id === resource.owner.id) return { allowed: true };
  if (user.role !== resource.requiredRole) return { allowed: false, reason: 'role_mismatch' };
  return { allowed: true };
}
```

## 9. Performance Considerations

- Authorization model has no runtime footprint in Astra — consumer-managed enforcement
- Visibility checks add per-request/rendering overhead in consumer app (depends on implementation)
- Astra components do not perform authorization — no overhead in library code
- Feature docs declare visibility — no lookup cost at runtime
- Delegation expiry checks are consumer-managed (timer or on-access check)

## 10. Integration Points

| Integration | Mechanism | Responsibility |
|---|---|---|
| Feature visibility declaration | `## Authorization` section in feature spec | Feature docs |
| Authentication | Consumer-managed session/auth provider | Consumer app |
| Role management | Consumer-managed role assignment | Consumer app |
| Enforcement | Guards, route wrappers, permission gates | Consumer app |
| Denial feedback | Error components, localized messages | Consumer app |
| Ownership tracking | Resource-author association | Consumer app |
| Delegation management | Temporary access grant system | Consumer app |

## 11. Open Questions

- Should Astra provide optional auth guard wrapper components for common patterns (e.g., `<Authenticated>`, `<WithRole>`)?
- How should visibility override for admin users be handled in component rendering?
- Should authorization be enforceable via a centralized middleware or left entirely to each feature?

## 12. Authorization

**Visibility:** Public — stateless Astra library component/primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
