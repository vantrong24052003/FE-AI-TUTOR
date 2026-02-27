# RSPEC Testing Rules - BDD for Ruby

## 1. MANDATORY Testing Requirement

**QUAN TRỌNG**: Mọi tính năng mới HOẶC sửa lỗi PHẢI đi kèm với RSpec tests coverage đầy đủ.

### Quy tắc bắt buộc:
- **Không commit code nếu chưa có test**
- **Không merge PR nếu test coverage không đạt**
- **Không xem tính năng "xong" nếu chưa có test pass**

## 2. Test Coverage Requirements

### Coverage Targets
| Loại | Minimum Coverage |
|------|------------------|
| Models | 100% |
| Operations | 100% |
| Forms | 100% |
| Controllers (Requests) | 90% |

### Test Cases Bắt Buộc
- **Happy Path**: Flow chính hoạt động đúng
- **Edge Cases**: Boundary conditions, null values
- **Error Cases**: Invalid input, authorization failures
- **Authorization**: User permissions, role-based access

## 3. RSpec Structure (AAA Pattern)

```ruby
RSpec.describe Purchases::CreateOperation, type: :operation do
  describe "#call" do
    context "when buyer has sufficient balance" do
      let(:buyer) { create(:account, balance: 1_000_000) }
      let(:post) { create(:marketplace_post, :active, price: 500_000) }

      it "creates purchase and deducts balance" do
        # Act
        result = described_class.new(post: post, buyer: buyer).call

        # Assert
        expect(result).to be_a(Purchase)
        expect(result.status).to eq("paid")
        expect(buyer.reload.balance).to eq(500_000)
      end
    end

    context "when buyer has insufficient balance" do
      let(:buyer) { create(:account, balance: 100_000) }

      it "raises InsufficientBalanceError" do
        expect {
          described_class.new(post: post, buyer: buyer).call
        }.to raise_error(InsufficientBalanceError)
      end
    end
  end
end
```

## 4. FactoryBot Setup

### Factories
```ruby
# spec/factories/accounts.rb
FactoryBot.define do
  factory :account do
    email { Faker::Internet.email }
    name { Faker::Name.name }
    role { "member" }
    balance { 1_000_000 }

    trait :admin do
      role { "admin" }
    end

    trait :with_balance do
      balance { 10_000_000 }
    end
  end
end

# spec/factories/marketplace_posts.rb
FactoryBot.define do
  factory :marketplace_post do
    association :seller_account, factory: :account
    association :game_profile
    price { 500_000 }
    status { "pending" }

    trait :active do
      status { "active" }
      approved_at { Time.current }
    end

    trait :sold do
      status { "sold" }
      sold_at { Time.current }
    end
  end
end
```

### Usage
```ruby
# Good - Use factories
let(:user) { create(:account, :admin) }
let(:post) { create(:marketplace_post, :active, price: 1_000_000) }

# Bad - Don't use raw data
let(:user) { Account.new(email: "test@test.com", ...) }
```

## 5. Model Specs

```ruby
RSpec.describe Account, type: :model do
  describe "validations" do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email) }
    it { is_expected.to define_enum_for(:role).with_values(member: 0, admin: 1) }
  end

  describe "associations" do
    it { is_expected.to have_many(:game_profiles).with_foreign_key(:owner_account_id) }
    it { is_expected.to have_many(:marketplace_posts).with_foreign_key(:seller_account_id) }
  end

  describe "#sufficient_balance?" do
    subject { account.sufficient_balance?(amount) }

    let(:account) { create(:account, balance: 1_000_000) }

    context "when balance is sufficient" do
      let(:amount) { 500_000 }

      it { is_expected.to be true }
    end

    context "when balance is insufficient" do
      let(:amount) { 2_000_000 }

      it { is_expected.to be false }
    end
  end
end
```

## 6. Request Specs (API)

```ruby
RSpec.describe "Api::V1::Posts", type: :request do
  describe "GET /api/v1/posts" do
    before { create_list(:marketplace_post, 3, :active) }

    it "returns list of posts" do
      get "/api/v1/posts"

      expect(response).to have_http_status(:ok)
      expect(json["posts"].size).to eq(3)
    end
  end

  describe "POST /api/v1/posts" do
    let(:user) { create(:account) }

    context "when authenticated" do
      before { sign_in(user) }

      it "creates a post" do
        post "/api/v1/posts", params: { post: valid_attributes }

        expect(response).to have_http_status(:created)
        expect(json["price"]).to eq("500000.0")
      end
    end

    context "when not authenticated" do
      it "returns unauthorized" do
        post "/api/v1/posts", params: { post: valid_attributes }

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
```

## 7. Operation Specs

```ruby
RSpec.describe Purchases::CreateOperation, type: :operation do
  let(:buyer) { create(:account, balance: 1_000_000) }
  let(:seller) { create(:account) }
  let(:game_profile) { create(:game_profile, owner_account: seller) }
  let(:post) { create(:marketplace_post, :active, game_profile: game_profile, price: 500_000) }

  subject { described_class.new(post: post, buyer: buyer).call }

  describe "#call" do
    it "creates purchase with paid status" do
      expect { subject }.to change(Purchase, :count).by(1)
      expect(subject.status).to eq("paid")
    end

    it "deducts buyer balance" do
      expect { subject }.to change { buyer.reload.balance }.by(-500_000)
    end

    it "creates delivery record" do
      expect { subject }.to change(DeliveryRecord, :count).by(1)
    end

    it "marks post as sold" do
      subject
      expect(post.reload.status).to eq("sold")
    end

    it "logs activity" do
      expect { subject }.to change(SystemActivityLog, :count).by(1)
    end
  end
end
```

## 8. Essential Matchers

```ruby
# Equality
expect(value).to eq(expected)
expect(value).to be(expected)

# Truthiness
expect(value).to be_truthy
expect(value).to be_falsy
expect(value).to be_nil

# Collections
expect(array).to include(item)
expect(array).to be_empty

# Errors
expect { call }.to raise_error(ErrorClass)
expect { call }.to raise_error(ErrorClass, /message/)

# Changes
expect { call }.to change(Model, :count).by(1)
expect { call }.to change { object.attribute }.from(old).to(new)

# Validations (shoulda-matchers)
it { is_expected.to validate_presence_of(:email) }
it { is_expected.to belong_to(:account) }
```

## 9. Running Tests

```bash
# Run all tests
bundle exec rspec

# Run specific file
bundle exec rspec spec/operations/purchases/create_operation_spec.rb

# Run specific line
bundle exec rspec spec/models/account_spec.rb:42

# Run with verbose output
bundle exec rspec --format documentation

# Run only failed tests
bundle exec rspec --only-failures
```

## 10. Checklist Before "Done"

- [ ] All tests pass (`bundle exec rspec`)
- [ ] Coverage meets minimum requirements
- [ ] Edge cases covered
- [ ] Error cases covered
- [ ] Authorization tested
- [ ] Factories created for new models
- [ ] Tests are readable and maintainable
