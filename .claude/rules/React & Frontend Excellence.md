# React 18 & Frontend Excellence

## 1. Tech Stack

- **Framework**: React 18+ với Vite
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **HTTP**: TanStack Query (React Query)

## 2. Project Structure

```
src/
├── components/          → Reusable UI components
│   ├── ui/             → Base components (Button, Input, Card)
│   ├── layout/         → Layout components (Header, Sidebar)
│   └── features/       → Feature-specific components
├── hooks/              → Custom hooks
├── stores/             → Zustand stores
├── services/           → API services
├── types/              → TypeScript types
├── utils/              → Utility functions
├── pages/              → Page components
└── constants/          → Constants & configs
```

## 3. Component Patterns

### Compound Components
```tsx
<Card>
  <Card.Image src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Price>{price}</Card.Price>
  </Card.Body>
  <Card.Footer>
    <Button>Mua ngay</Button>
  </Card.Footer>
</Card>
```

### Custom Hooks
```tsx
// hooks/usePurchase.ts
export function usePurchase(postId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: PurchaseInput) => api.purchase(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["purchases"] })
      toast.success("Mua thành công!")
    },
    onError: (error) => {
      toast.error(getErrorMessage(error))
    }
  })
}
```

### Error Boundaries
```tsx
// Wrap major features
<ErrorBoundary fallback={<PurchaseErrorFallback />}>
  <PurchaseFlow />
</ErrorBoundary>
```

## 4. State Management

### Zustand Store
```tsx
// stores/authStore.ts
interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false })
}))
```

### React Query for Server State
```tsx
// Don't put server data in Zustand
const { data: posts, isLoading } = useQuery({
  queryKey: ["posts", filters],
  queryFn: () => api.getPosts(filters)
})
```

## 5. Forms & Validation

### React Hook Form + Zod
```tsx
const schema = z.object({
  price: z.number().positive("Giá phải lớn hơn 0"),
  description: z.string().min(10, "Mô tả tối thiểu 10 ký tự")
})

type FormData = z.infer<typeof schema>

function PostForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("price")} error={errors.price} />
    </form>
  )
}
```

## 6. UI/UX Requirements

### Design System (Dark Theme)
```css
/* Colors */
--bg-primary: #0f172a;      /* slate-900 */
--bg-secondary: #1e293b;    /* slate-800 */
--accent-primary: #8b5cf6;  /* violet-500 */
--accent-secondary: #ec4899; /* pink-500 */
--gold: #fbbf24;            /* amber-400 */
```

### Glassmorphism Effects
```tsx
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
  {/* Content */}
</div>
```

### Loading States
```tsx
// Skeleton for loading
{isLoading ? (
  <ProductCardSkeleton count={4} />
) : (
  products.map(p => <ProductCard key={p.id} product={p} />)
)}

// Empty state
{products.length === 0 && (
  <EmptyState
    icon={<Package />}
    title="Không có nick nào"
    description="Hãy quay lại sau"
  />
)}
```

## 7. Performance

### Code Splitting
```tsx
// Lazy load pages
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"))

// In router
<Route path="/admin" element={
  <Suspense fallback={<PageLoader />}>
    <AdminDashboard />
  </Suspense>
} />
```

### Memoization
```tsx
// Memo expensive components
const ProductCard = memo(({ product }: ProductCardProps) => {
  // ...
})

// Memoize callbacks
const handleSubmit = useCallback((data: FormData) => {
  mutate(data)
}, [mutate])

// Memoize computed values
const filteredProducts = useMemo(() => {
  return products.filter(p => p.gameTitle === selectedGame)
}, [products, selectedGame])
```

## 8. API Integration

### Service Layer
```tsx
// services/api.ts
export const api = {
  getPosts: (filters: PostFilters) =>
    request.get<PostResponse>("/api/v1/posts", { params: filters }),

  createPurchase: (postId: number) =>
    request.post<Purchase>(`/api/v1/purchases`, { marketplace_post_id: postId })
}
```

### Error Handling
```tsx
// utils/errors.ts
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Có lỗi xảy ra"
  }
  if (error instanceof Error) {
    return error.message
  }
  return "Lỗi không xác định"
}
```

## 9. TypeScript Best Practices

### Strict Types
```tsx
// Prefer interface for objects
interface User {
  id: number
  email: string
  role: "member" | "admin"
}

// Use const assertions for literals
const GAME_TITLES = ["ngoc_rong", "lien_quan"] as const
type GameTitle = typeof GAME_TITLES[number]

// Discriminated unions
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string }
```

### No `any` Type
```tsx
// BAD
const data: any = response.data

// GOOD
interface PostResponse {
  posts: Post[]
  meta: { total: number }
}
const { data } = response as PostResponse
```
