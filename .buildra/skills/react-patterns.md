# React Patterns

Performance and correctness patterns based on Vercel React Best Practices. Follow these when writing application code.

## 1. Never Define Components Inside Components

Defining a component inside another creates a new type on every render, causing remounts and lost state.

```tsx
// WRONG — remounts Avatar on every render
function UserProfile({ user }) {
  const Avatar = () => <img src={user.avatarUrl} />
  return <Avatar />
}

// CORRECT — stable component, pass props
function Avatar({ src }: { src: string }) {
  return <img src={src} />
}

function UserProfile({ user }) {
  return <Avatar src={user.avatarUrl} />
}
```

Symptoms: input fields lose focus, animations restart, effects fire repeatedly.

## 2. Derive State During Render

If a value can be computed from props/state, don't store it in state or update it in useEffect.

```tsx
// WRONG — extra state + effect
const [items, setItems] = useState<Item[]>([])
const [count, setCount] = useState(0)
useEffect(() => { setCount(items.length) }, [items])

// CORRECT — derive it
const [items, setItems] = useState<Item[]>([])
const count = items.length
```

## 3. Import Directly, Not From Barrel Files

Import each component from its own file. Never create or import from an index barrel.

```tsx
// WRONG — barrel import loads everything
import { Button, Card, Dialog } from "@/components/ui"

// CORRECT — direct imports
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog } from "@/components/ui/dialog"
```

## 4. Lazy State Initialization

Pass a function to `useState` when the initial value is expensive to compute.

```tsx
// WRONG — JSON.parse runs on every render
const [settings, setSettings] = useState(JSON.parse(localStorage.getItem('settings') || '{}'))

// CORRECT — only runs once
const [settings, setSettings] = useState(() => JSON.parse(localStorage.getItem('settings') || '{}'))
```

## 5. Stable Default Props

When a component has optional non-primitive props, hoist the default value to a constant.

```tsx
// WRONG — new function created every render, breaks memoization
function List({ onSelect = () => {} }) { ... }

// CORRECT — stable reference
const NOOP = () => {}
function List({ onSelect = NOOP }) { ... }
```

## 6. Use Ternary for Conditional Rendering

Avoid `&&` when the condition can be `0`, `NaN`, or `""`.

```tsx
// WRONG — renders "0" when count is 0
{count && <Badge>{count}</Badge>}

// CORRECT
{count > 0 ? <Badge>{count}</Badge> : null}
```

## 7. Use Functional setState

When the next state depends on the previous state, use the function form.

```tsx
// WRONG — stale closure risk with multiple rapid updates
setCount(count + 1)

// CORRECT
setCount(prev => prev + 1)
```

## 8. Event Handlers Over Effects

If something happens in response to a user action, put it in an event handler, not an effect.

```tsx
// WRONG — effect for user-triggered action
useEffect(() => {
  if (submitted) { saveToServer(data) }
}, [submitted])

// CORRECT — event handler
function handleSubmit() {
  saveToServer(data)
}
```

## 9. Use Refs for Transient Values

Values that change frequently but don't need to trigger re-renders should use refs.

```tsx
// WRONG — re-renders on every mouse move
const [pos, setPos] = useState({ x: 0, y: 0 })

// CORRECT — no re-renders
const posRef = useRef({ x: 0, y: 0 })
```

## 10. Parallel Async Operations

When you have independent async operations, run them in parallel.

```tsx
// WRONG — sequential, slow
const user = await fetchUser(id)
const posts = await fetchPosts(id)

// CORRECT — parallel
const [user, posts] = await Promise.all([fetchUser(id), fetchPosts(id)])
```
