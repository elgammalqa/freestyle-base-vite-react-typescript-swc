# Animations

`framer-motion` is pre-installed. Use it for scroll-reveal, hover effects, stagger animations, and page transitions.

## AnimatedSection — Create This First

Every page should have scroll-reveal animations. Create this component in your main App file or a shared components file:

```tsx
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function AnimatedSection({ children, delay = 0, className = "" }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

## Animation Patterns

### Hero Entrance
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h1 className="text-5xl font-bold">Hero Title</h1>
</motion.div>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="text-muted-foreground"
>
  Subtitle appears after heading
</motion.p>
```

### Staggered Card Grid
```tsx
{items.map((item, i) => (
  <AnimatedSection key={item.id} delay={i * 0.1}>
    <Card>
      <CardContent>{item.title}</CardContent>
    </Card>
  </AnimatedSection>
))}
```

### Hover Lift on Cards
```tsx
<motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
  <Card>
    <CardContent>Hover me</CardContent>
  </Card>
</motion.div>
```

### Scale on Hover (Buttons/Icons)
```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button>Click me</Button>
</motion.div>
```

### Fade In From Left/Right
```tsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  Slides in from left
</motion.div>
```

### Page Transitions
```tsx
import { AnimatePresence, motion } from "framer-motion"

<AnimatePresence mode="wait">
  <motion.div
    key={currentPage}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {pageContent}
  </motion.div>
</AnimatePresence>
```

### Number Counter
```tsx
import { useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

function Counter({ target }: { target: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, target, { duration: 2 })
    return controls.stop
  }, [target])

  return <motion.span>{rounded}</motion.span>
}
```

## When to Animate

- **Always animate:** Hero sections, section entrances, card grids, stat counters
- **Subtle hover:** Cards, buttons, interactive elements
- **Page transitions:** When switching between views/tabs
- **Don't overdo:** Don't animate every single element. Focus on sections and key interactions.

## Rules

1. **Wrap every major section** in `AnimatedSection`
2. **Stagger cards** with `delay={i * 0.1}`
3. **Use `once: true`** on `useInView` — don't re-animate on scroll back
4. **Keep durations short** — 0.3-0.7s. Longer feels sluggish.
5. **Use spring for hover** — `type: "spring", stiffness: 300` feels natural
6. **Don't animate layout shifts** — only animate opacity, transform (y, x, scale)
