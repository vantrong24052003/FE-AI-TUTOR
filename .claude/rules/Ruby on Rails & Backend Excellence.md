# Ruby on Rails 8 & Backend Excellence

## 1. HMVC Architecture Pattern

```
app/
├── controllers/       → Skinny controllers, chỉ handle request/response
├── models/           → ActiveRecord models, validations, associations
├── operations/       → Business logic operations (Command pattern)
├── forms/            → Form objects cho complex validations
├── validators/       → Custom validators (EmailValidator, etc.)
├── serializers/      → JSON serialization (ActiveModel::Serializer)
└── concerns/         → Shared modules (Loggable, Filterable)
```

### Operations (Business Logic)
```ruby
# app/operations/purchases/create_operation.rb
module Purchases
  class CreateOperation < ApplicationOperation
    def call
      validate!
      process_purchase
    end

    private

    def validate!
      # Validation logic
    end

    def process_purchase
      # Business logic
    end
  end
end
```

### Forms (Complex Validations)
```ruby
# app/forms/game_profile_form.rb
class GameProfileForm < ApplicationForm
  attribute :game_title, :string
  attribute :server, :string
  attribute :credentials, :hash

  validates :game_title, inclusion: { in: %w[ngoc_rong lien_quan] }
  validates :server, presence: true
end
```

## 2. API Mode (Rails 8)

### Response Format
```ruby
# Success
render json: { data: resource, meta: { total: 100 } }, status: :ok

# Error
render json: { error: "Error type", message: "Details" }, status: :unprocessable_entity
```

### Strong Parameters (ALWAYS)
```ruby
def post_params
  params.require(:post).permit(:game_profile_id, :price, :description)
end

# NEVER use params.permit!
```

## 3. Database & Performance

- **N+1 Prevention**: Luôn dùng `.includes`, `.preload` cho associations
- **Indexing**: FK columns + frequently searched columns (`status`, `game_title`)
- **Transactions**: Dùng cho atomic operations (Escrow flow)
- **Locking**: Dùng `lock!` cho balance operations

```ruby
Account.transaction do
  account = Account.lock.find(id)
  account.update!(balance: account.balance - amount)
end
```

## 4. Security (E-commerce Domain)

### Credentials Encryption
```ruby
# Dùng Rails 7+ Active Record Encryption
class SecuredCredential < ApplicationRecord
  encrypts :data
end
```

### Audit Logging
```ruby
# Log tất cả actions quan trọng
SystemActivityLog.create!(
  actor_account_id: current_user.id,
  action: "purchase_created",
  entity_type: "Purchase",
  entity_id: purchase.id
)
```

## 5. Testing with RSpec

### Required Coverage
| Type | Minimum Coverage |
|------|------------------|
| Models | 100% |
| Operations | 100% |
| Controllers | 90% |
| Forms | 100% |

### Example Spec
```ruby
RSpec.describe Purchases::CreateOperation, type: :operation do
  describe "#call" do
    context "when balance is sufficient" do
      it "creates purchase and deducts balance" do
        expect { operation.call }.to change(Purchase, :count).by(1)
      end
    end

    context "when balance is insufficient" do
      it "raises InsufficientBalanceError" do
        expect { operation.call }.to raise_error(InsufficientBalanceError)
      end
    end
  end
end
```

## 6. Code Style

- **RuboCop**: Run `rubocop -A` before commit
- **Frozen String**: `# frozen_string_literal: true` at top of every file
- **I18n**: No hardcoded text, use `config/locales/`
- **Snake Case**: `create_purchase`, `game_profile_id`
