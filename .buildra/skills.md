---
name: buildra-frontend-template
description: Instructions for building professional frontend apps with pre-built shadcn/ui components, Framer Motion animations, Unsplash images, and Lucide icons
---

# Buildra Frontend Template

You are building a frontend app using a pre-configured Vite + React + TypeScript + Tailwind CSS + shadcn/ui template. Everything is pre-installed — do NOT run `npm install` for UI packages.

## First Steps — Do These Before Writing Any UI Code

### 1. Rename the Project

Update `package.json` name field to match the app being built:

```bash
# Replace "my-app-name" with a kebab-case version of the user's app name
sed -i 's/"name": "freestyle-base-vite-react-typescript-swc"/"name": "my-app-name"/' package.json
```

### 2. Generate README.md

Overwrite `README.md` with the app's name and description:

```markdown
# App Name

Brief description of what this app does.

Built with [Buildra](https://buildra.dev)
```

### 3. Search for Images

Call `searchImagesTool` to find real Unsplash photos BEFORE writing code:

- Hero/banner: `searchImagesTool({ query: "...", orientation: "landscape" })`
- Feature cards: `searchImagesTool({ query: "...", orientation: "squarish" })`
- About/team: `searchImagesTool({ query: "...", orientation: "portrait" })`

## Pre-Built Components

55 shadcn/ui components are ready in `src/components/ui/`. Import and use them directly.

### Layout & Structure

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
```

### Buttons & Actions

```tsx
import { Button } from "@/components/ui/button"

<Button>Primary</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Danger</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Star className="h-4 w-4" /></Button>
```

### Forms & Inputs

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Feedback & Overlays

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
```

### Navigation

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
```

### Data Display

```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
```

## Animations — Framer Motion

`framer-motion` is pre-installed. Wrap every section in scroll-reveal animations.

### AnimatedSection Component — Create This First

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

### Animation Patterns

```tsx
// Hero entrance
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
  <h1>Hero Title</h1>
</motion.div>

// Staggered card grid
{items.map((item, i) => (
  <AnimatedSection key={i} delay={i * 0.1}>
    <Card>...</Card>
  </AnimatedSection>
))}

// Hover lift on cards
<motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
  <Card>...</Card>
</motion.div>

// Number counter
<motion.span>{useMotionValue(0)}</motion.span>

// Page transitions with AnimatePresence
import { AnimatePresence } from "framer-motion"
<AnimatePresence mode="wait">
  <motion.div key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {content}
  </motion.div>
</AnimatePresence>
```

## Icons — Lucide React

`lucide-react` is pre-installed. Use Lucide icons for ALL visual indicators.

```tsx
import {
  Home, Star, Heart, ArrowRight, ArrowLeft, Check, X, Menu,
  Search, User, Settings, Mail, Phone, MapPin, Clock, Calendar,
  BookOpen, Award, TrendingUp, Shield, Zap, Download, Upload,
  Share2, ExternalLink, ChevronDown, ChevronRight, Plus, Minus,
  Eye, EyeOff, Lock, Unlock, Bell, BellOff, Bookmark, Flag,
  Globe, Image, Camera, Video, Music, FileText, Folder, Trash2,
  Edit, Copy, Clipboard, RefreshCw, RotateCcw, Filter, SortAsc,
  BarChart, PieChart, Activity, Cpu, Database, Server, Wifi,
  Sun, Moon, Cloud, Droplet, Wind, Thermometer
} from "lucide-react"
```

**NEVER use emoji** (🚗 ⭐ 🏠 🎯 etc.) as visual elements. Always use Lucide icons.

## Images — Unsplash

Call `searchImagesTool` to get real stock photos. Use returned URLs directly:

```tsx
// Hero background
<div className="relative h-[400px] overflow-hidden">
  <img src={heroImageUrl} alt="..." className="absolute inset-0 h-full w-full object-cover" />
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 flex h-full items-center justify-center text-white">
    <h1>Title</h1>
  </div>
</div>

// Feature card with image
<Card>
  <AspectRatio ratio={16/9}>
    <img src={featureImageUrl} alt="..." className="h-full w-full object-cover rounded-t-lg" />
  </AspectRatio>
  <CardContent>...</CardContent>
</Card>
```

Include credit in the footer: `<a href="{creditUrl}" target="_blank" className="text-xs text-muted-foreground">Photo by {credit}</a>`

## Rules

1. **Components first**: Never write raw HTML when a shadcn component exists
2. **Animate everything**: Every section gets AnimatedSection wrapper
3. **Real images**: Call searchImagesTool for photos, never leave blank
4. **Lucide icons only**: No emoji, no inline SVG for common icons
5. **Rename project**: Update package.json name and README.md
6. **Responsive**: Use Tailwind responsive classes (sm:, md:, lg:)
7. **Dark mode**: Support with Tailwind dark: classes and CSS variables
8. **Accessibility**: Use proper labels, alt text, semantic HTML, ARIA
9. **Working features**: Forms submit, buttons do things, state updates
