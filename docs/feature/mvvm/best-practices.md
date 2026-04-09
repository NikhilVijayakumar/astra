# MVVM Best Practices

## Do

✅ **Use for async data flows** — API calls, file loading, computations  
✅ **Keep ViewModel in feature folders** — Co-locate with components  
✅ **Use AppStateHandler for consistent UI** — Standardizes loading/error states  
✅ **Type your state** — `AppState<User[]>` not `AppState<any>`  
✅ **Extract custom hooks** — For reusable state logic

## Don't

❌ **Don't put business logic in components** — Use ViewModel hooks  
❌ **Don't skip error states** — Always handle `isError`  
❌ **Don't mutate state directly** — Use `setAppState`  
❌ **Don't couple to specific components** — Keep ViewModel generic

## Common Pitfalls

1. **Forgetting `execute()` call** — State stays at INIT
2. **Not checking `data !== null`** — Success state can have null data
3. **Missing error boundaries** — Unhandled errors crash the app

## Testing

Test the ViewModel hook:

```typescript
const { result } = renderHook(() => useDataState<User>());
await act(async () => {
  await result.current[1](mockApiCall);
});
expect(result.current[0].isSuccess).toBe(true);
```
