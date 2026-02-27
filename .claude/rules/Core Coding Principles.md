# Core Coding Principles & Defensive Programming

## 1. Core Principles

### KISS (Keep It Simple, Stupid)
- Write simple, readable code
- Avoid over-engineering
- Don't create abstractions until needed

### YAGNI (You Ain't Gonna Need It)
- Implement only what is requested
- Don't add features "just in case"
- Delete unused code immediately

### DRY (Don't Repeat Yourself)
- Extract reusable logic into:
  - **Backend**: Operations, Concerns, Services
  - **Frontend**: Custom Hooks, Utility functions

### SOLID
- **Single Responsibility**: One class/function = one purpose
- **Open/Closed**: Open for extension, closed for modification

## 2. Defensive Programming

### Backend (Rails)
```ruby
# Safe navigation
user&.profile&.avatar_url

# Nil coalescing
account.balance || 0

# Guard clauses
return unless user.active?

# Exceptions for flow control
raise InsufficientBalanceError if account.balance < amount
```

### Frontend (React/TypeScript)
```typescript
// Optional chaining
user?.profile?.avatarUrl ?? "/default.png"

// Early returns
if (!user) return null

// Type guards
const isGameProfile = (data: unknown): data is GameProfile => {
  return typeof data === "object" && data !== null && "gameTitle" in data
}
```

## 3. Error Handling

### Backend
```ruby
# Custom exceptions
class InsufficientBalanceError < StandardError; end
class PostNotAvailableError < StandardError; end

# Rescue in controller
rescue_from InsufficientBalanceError, with: :handle_insufficient_balance
```

### Frontend
```typescript
// Error Boundary
<ErrorBoundary fallback={<ErrorFallback />}>
  <FeatureComponent />
</ErrorBoundary>

// Try-catch for async
try {
  await purchaseMutation.mutateAsync({ postId })
} catch (error) {
  toast.error(getErrorMessage(error))
}
```

## 4. Loading & Empty States

### Frontend Required
```tsx
// Loading state
{isLoading && <SkeletonLoader />}

// Empty state
{data.length === 0 && <EmptyState message="Không có nick nào" />}

// Error state
{isError && <ErrorAlert message={error.message} />}
```

## 5. Validation

### Backend (Model + Form Objects)
```ruby
validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
validates :price, numericality: { greater_than: 0 }
```

### Frontend (Zod)
```typescript
const purchaseSchema = z.object({
  postId: z.number().positive(),
  price: z.number().positive()
})
```

## 6. Clean Code

### No Redundant Comments
```ruby
# BAD
# Calculate total price
def calculate_total_price
  price * quantity
end

# GOOD - Self-documenting
def total_price
  price * quantity
end
```

### Comment Only When Necessary
```ruby
# GOOD - Explains WHY
# Use lock! to prevent race condition during balance deduction
# See: https://api.rubyonrails.org/classes/ActiveRecord/Locking/Pessimistic.html
account.lock!
```

### Meaningful Names
```ruby
# BAD
def process(data)
  # ...
end

# GOOD
def process_purchase(purchase_params)
  # ...
end
```
