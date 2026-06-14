# Authorization Model

This document defines the authorization and permission model for all features. It describes who can see, act on, and own resources within the system.

## Overview

The authorization model governs access to features and data. It defines visibility rules (who can see), action permissions (who can act), and ownership (who owns). This model is cross-cutting — every feature should reference and conform to these rules.

## Visibility

| Level | Definition | Example |
|-------|------------|---------|
| Public | Visible to all users without authentication | Theme toggle, language selector |
| Authenticated | Visible to any logged-in user | Data tables, file viewers |
| Role-restricted | Visible to users with specific roles | Admin panels, settings |
| Owner-only | Visible only to the resource owner | Personal dashboards |

## Actions

| Action | Description | Default Permission |
|--------|-------------|-------------------|
| View | See the feature or data | Authenticated |
| Create | Add new data or resources | Role-restricted |
| Edit | Modify existing data or resources | Owner or role-restricted |
| Delete | Remove data or resources | Owner or role-restricted |
| Configure | Change feature settings | Admin |
| Share | Grant access to others | Owner |

## Restrictions

- Unauthenticated users cannot perform any mutating actions
- Users cannot escalate their own permissions
- Role-restricted actions require explicit role assignment
- Owner-scoped actions are limited to the resource creator

## Ownership

| Entity | Owner | Delegation |
|--------|-------|------------|
| User data | User who created it | Not delegable |
| Application settings | System administrator | Not delegable |
| Shared resources | Creator or admin-assigned | Transferable |
| Feature configuration | System administrator | Not delegable |

## Delegation

- Ownership transfer requires admin approval
- Temporary access grants expire after a configurable duration
- Delegation does not revoke original owner's access

## User Journey

### Entry Conditions
User attempts to access a feature or perform an action.

### Primary Flow
User authenticates, system verifies permissions, grants access to authorized resources.

### Alternate Flows
Admin overrides restrictions for specific users. Owner grants temporary access to a collaborator.

### Failure Flows
User attempts unauthorized action — system denies access with appropriate feedback.

### Recovery Flows
User requests elevated permissions from an admin. Owner transfers ownership to another user.

### Exit Conditions
User logs out or session expires — permissions are re-verified on next access.

## Workflow

### Trigger
Access request to a feature or resource.

### Preconditions
User identity is established (authenticated or anonymous).

### Steps
1. Identify the resource and requested action
2. Determine visibility level of the resource
3. Determine action permissions for the user's role
4. Check ownership if owner-scoped
5. Grant or deny access

### Outcomes
- Access granted — feature or data is displayed
- Access denied — user receives denial reason
- Access escalated — admin override applied

### Exceptions
- Role not found — deny access
- Resource has no owner — deny mutating actions
- Permission configuration missing — default to most restrictive

### Completion Criteria
User either gains access or receives a clear denial.
