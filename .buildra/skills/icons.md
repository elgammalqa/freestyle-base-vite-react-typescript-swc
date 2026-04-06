# Icons

`lucide-react` is pre-installed. Use Lucide icons for ALL visual indicators. NEVER use emoji as icons.

## Import Pattern

```tsx
import { Home, Star, Heart, ArrowRight, Check, X, Menu, Search } from "lucide-react"
```

## Sizing

| Context | Size | Class |
|---------|------|-------|
| Inline with text | 16px | `h-4 w-4` |
| Navigation/toolbar | 20px | `h-5 w-5` |
| Feature sections | 24px | `h-6 w-6` |
| Hero icons | 32px | `h-8 w-8` |
| Large display | 48px | `h-12 w-12` |

## Icons by Category

### Navigation & UI
```tsx
import { Home, ArrowRight, ArrowLeft, ChevronDown, ChevronRight, ChevronUp, ChevronLeft, Menu, X, ExternalLink, MoreHorizontal, MoreVertical } from "lucide-react"
```

### Actions
```tsx
import { Search, Plus, Minus, Check, X, Edit, Trash2, Copy, Clipboard, Download, Upload, Share2, RefreshCw, RotateCcw, Filter, SortAsc } from "lucide-react"
```

### Status & Feedback
```tsx
import { AlertCircle, AlertTriangle, Info, CheckCircle, XCircle, Bell, BellOff, Eye, EyeOff, Lock, Unlock } from "lucide-react"
```

### Communication
```tsx
import { Mail, Phone, MessageSquare, Send, Inbox, AtSign } from "lucide-react"
```

### User & Social
```tsx
import { User, Users, UserPlus, Heart, Star, Bookmark, Flag, ThumbsUp, ThumbsDown } from "lucide-react"
```

### Media
```tsx
import { Image, Camera, Video, Music, FileText, Folder, File } from "lucide-react"
```

### Location & Time
```tsx
import { MapPin, Globe, Clock, Calendar } from "lucide-react"
```

### Data & Tech
```tsx
import { BarChart, PieChart, Activity, TrendingUp, Cpu, Database, Server, Wifi, Zap, Shield } from "lucide-react"
```

### Weather
```tsx
import { Sun, Moon, Cloud, Droplet, Wind, Thermometer } from "lucide-react"
```

### Commerce
```tsx
import { ShoppingCart, CreditCard, DollarSign, Package, Tag, Receipt } from "lucide-react"
```

## Usage Examples

### Button with Icon
```tsx
<Button>
  <ArrowRight className="h-4 w-4" />
  Continue
</Button>

<Button size="icon" variant="ghost">
  <Search className="h-4 w-4" />
</Button>
```

### Feature Card Icon
```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
  <Zap className="h-6 w-6 text-primary-foreground" />
</div>
```

### Status Indicator
```tsx
<div className="flex items-center gap-2 text-sm">
  <CheckCircle className="h-4 w-4 text-green-500" />
  <span>Active</span>
</div>
```

### Empty State Icon
```tsx
<Empty>
  <EmptyIcon>
    <Inbox className="h-8 w-8" />
  </EmptyIcon>
  <EmptyTitle>No messages</EmptyTitle>
</Empty>
```

## Rules

1. **NEVER use emoji** (like star, rocket, house, target, etc.) as visual elements — always use Lucide icons
2. **NEVER use inline SVG** for common icons — Lucide has it covered
3. **Always set size** with `h-N w-N` classes
4. **Use consistent sizing** within a context (all nav icons same size, all feature icons same size)
5. **Pair icons with text** for accessibility — icons alone need `aria-label`
