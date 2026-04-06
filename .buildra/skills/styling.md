# Styling

This template uses Tailwind CSS v4 with a minimal CSS variable theme. 10 semantic color variables power the entire design system.

## Theme Variables

Defined in `src/index.css`:

| Variable | Light | Dark | Tailwind Class |
|----------|-------|------|---------------|
| `--bg` | `#ffffff` | `#0a0a0a` | `bg-background` |
| `--fg` | `#0a0a0a` | `#fafafa` | `text-foreground` |
| `--primary` | `#171717` | `#fafafa` | `bg-primary`, `text-primary` |
| `--primary-fg` | `#fafafa` | `#171717` | `text-primary-foreground` |
| `--muted` | `#f5f5f5` | `#262626` | `bg-muted` |
| `--muted-fg` | `#737373` | `#a3a3a3` | `text-muted-foreground` |
| `--border` | `#e5e5e5` | `#262626` | `border-border` |
| `--accent` | `#f5f5f5` | `#262626` | `bg-accent` |
| `--accent-fg` | `#171717` | `#fafafa` | `text-accent-foreground` |
| `--destructive` | `#ef4444` | `#dc2626` | `bg-destructive`, `text-destructive` |
| `--destructive-fg` | `#ffffff` | `#fafafa` | `text-destructive-foreground` |
| `--radius` | `0.625rem` | `0.625rem` | `rounded-sm/md/lg/xl` |

## Using Theme Colors

Always use the semantic Tailwind classes, never raw hex values:

```tsx
// CORRECT — uses theme
<div className="bg-background text-foreground border border-border">
  <h1 className="text-foreground">Title</h1>
  <p className="text-muted-foreground">Subtitle</p>
  <button className="bg-primary text-primary-foreground">Action</button>
</div>

// WRONG — hardcoded colors
<div className="bg-white text-black border border-gray-200">
  <h1 className="text-black">Title</h1>
</div>
```

## Custom Theme Per Project

The agent can generate a custom color palette by modifying the CSS variables in `src/index.css`. Example for a blue-themed app:

```css
:root {
  --primary: #2563eb;
  --primary-fg: #ffffff;
  --accent: #eff6ff;
  --accent-fg: #1e40af;
}
```

Only change the hex values — don't rename variables or change the structure.

## Responsive Design

Use Tailwind breakpoint prefixes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id}>...</Card>)}
</div>

<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
  Responsive heading
</h1>

<div className="px-4 sm:px-6 lg:px-8">
  Responsive padding
</div>
```

Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px).

## Dark Mode

The template supports dark mode via a `.dark` class on `<html>`. CSS variables automatically switch.

For elements that need different behavior in dark mode beyond the theme vars:

```tsx
<div className="shadow-sm dark:shadow-none">
  <img className="opacity-100 dark:opacity-80" src={url} alt="..." />
</div>
```

## Spacing & Layout Patterns

```tsx
// Section container
<section className="py-16 md:py-24 px-4">
  <div className="mx-auto max-w-6xl">...</div>
</section>

// Stack with gap
<div className="flex flex-col gap-4">...</div>

// Centered content
<div className="flex items-center justify-center min-h-screen">...</div>

// Grid layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">...</div>
```

## Typography

The template uses Geist Variable font (loaded via `@fontsource-variable/geist`).

```tsx
<h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
<h2 className="text-3xl font-semibold">Heading 2</h2>
<h3 className="text-2xl font-semibold">Heading 3</h3>
<p className="text-base text-muted-foreground leading-relaxed">Body text</p>
<p className="text-sm text-muted-foreground">Small text</p>
```

## cn() Utility

Use `cn()` from `@/lib/utils` to merge Tailwind classes:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("rounded-lg border p-4", isActive && "border-primary", className)}>
```

## Rules

1. **Always use semantic color classes** — `bg-background`, `text-foreground`, etc.
2. **Never hardcode colors** — no `bg-white`, `text-gray-500`, `border-gray-200`
3. **Use the `cn()` utility** for conditional classes
4. **Use responsive prefixes** — design mobile-first, add `md:` and `lg:` for larger screens
5. **Support dark mode** — the theme vars handle most cases; use `dark:` prefix for edge cases
