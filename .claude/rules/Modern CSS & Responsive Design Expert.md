# Modern CSS & Responsive Design

## 1. Tech Stack
- **Framework**: TailwindCSS
- **Approach**: Mobile-first, Dark theme, Glassmorphism

## 2. Design Tokens (NRO Theme)

### Colors
```css
/* Background */
--bg-primary: #0f172a;      /* slate-900 - Main background */
--bg-secondary: #1e293b;    /* slate-800 - Cards, sidebar */
--bg-tertiary: #334155;     /* slate-700 - Hover states */

/* Text */
--text-primary: #f8fafc;    /* slate-50 - Headings */
--text-secondary: #94a3b8;  /* slate-400 - Body text */
--text-muted: #64748b;      /* slate-500 - Meta */

/* Accent */
--accent-primary: #8b5cf6;  /* violet-500 - Primary buttons */
--accent-secondary: #ec4899; /* pink-500 - Secondary accent */
--gold: #fbbf24;            /* amber-400 - Price, money */

/* Status */
--success: #22c55e;         /* green-500 */
--warning: #f59e0b;         /* amber-500 */
--error: #ef4444;           /* red-500 */
--info: #3b82f6;            /* blue-500 */
```

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed"
        },
        secondary: {
          DEFAULT: "#ec4899"
        },
        gold: "#fbbf24",
        surface: {
          DEFAULT: "rgba(255,255,255,0.05)",
          hover: "rgba(255,255,255,0.1)"
        }
      }
    }
  }
}
```

## 3. Glassmorphism Effects

### Glass Card
```tsx
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
  {/* Content */}
</div>
```

### Glass Button
```tsx
<button className="bg-violet-500/20 backdrop-blur border border-violet-500/30 hover:bg-violet-500/30 transition-all">
  Click me
</button>
```

## 4. Layout Patterns

### Grid Layout
```tsx
// Product grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {products.map(p => <ProductCard key={p.id} product={p} />)}
</div>
```

### Flex Layout
```tsx
// Header
<header className="flex items-center justify-between px-4 py-3">
  <Logo />
  <nav className="flex items-center gap-4">...</nav>
</header>
```

## 5. Responsive Breakpoints

```
sm:  640px   → Small tablets
md:  768px   → Tablets
lg:  1024px  → Laptops
xl:  1280px  → Desktops
2xl: 1536px  → Large screens
```

### Mobile-First Approach
```tsx
// Good: Mobile first
<div className="p-4 md:p-6 lg:p-8">

// Bad: Desktop first
<div className="p-8 lg:p-6 md:p-4">
```

## 6. Common Patterns

### Card Hover Effect
```tsx
<div className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 hover:border-violet-500/50">
```

### Price Tag (Gold)
```tsx
<span className="text-gold font-bold text-lg">
  {formatPrice(price)}đ
</span>
```

### Status Badge
```tsx
// Active
<span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
  Active
</span>

// Pending
<span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">
  Pending
</span>

// Sold
<span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
  Sold
</span>
```

## 7. Animations

### Transitions
```tsx
// Fast interactions (buttons, hover)
className="transition-colors duration-150"

// Medium interactions (cards, modals)
className="transition-all duration-200"

// Slow interactions (page transitions)
className="transition-opacity duration-300"
```

### Hover Lift
```tsx
className="hover:-translate-y-1 transition-transform"
```

### Loading Shimmer
```tsx
<div className="animate-pulse bg-slate-700 rounded-md h-4 w-full" />
```

## 8. Accessibility

### Focus States
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900">
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 9. Best Practices

- **No inline styles** - Use Tailwind classes
- **No !important** - Fix specificity properly
- **No magic numbers** - Use spacing scale (p-4, gap-2)
- **Consistent naming** - Follow Tailwind conventions
- **Dark mode only** - No light mode support needed
