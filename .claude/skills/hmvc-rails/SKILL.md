---
name: hmvc-rails
description: "HMVC-Rails generator for Ruby on Rails. Hierarchical MVC pattern with Controllers, Operations, Forms, and Views. Actions: generate, create, scaffold, build HMVC structure. Supports custom actions, forms, parent controllers, and skip options. Perfect for NRO marketplace e-commerce project."
---

# HMVC-Rails - Hierarchical MVC Generator for Rails

Skill hỗ trợ generate cấu trúc HMVC (Hierarchical Model-View-Controller) cho Ruby on Rails applications. Giúp quản lý source code tốt hơn và phát triển project dễ dàng hơn.

## Khi nào sử dụng

Sử dụng skill này khi:
- Tạo mới controller với đầy đủ Operations, Forms, Views
- Scaffold HMVC structure cho feature mới
- Generate CRUD operations theo pattern chuẩn
- Tạo forms cho complex business logic
- Xây dựng admin panel, API endpoints

## Cấu trúc HMVC

```
app/
├── controllers/
│   └── {name}_controller.rb       # Skinny controller
├── operations/
│   └── {name}/
│       ├── index_operation.rb     # List logic
│       ├── show_operation.rb      # Show detail logic
│       ├── new_operation.rb       # New form logic
│       ├── create_operation.rb    # Create logic
│       ├── edit_operation.rb      # Edit form logic
│       ├── update_operation.rb    # Update logic
│       └── destroy_operation.rb   # Delete logic
├── forms/
│   └── {name}/
│       ├── new_form.rb            # Form object for new
│       ├── create_form.rb         # Form object for create
│       ├── edit_form.rb           # Form object for edit
│       └── update_form.rb         # Form object for update
└── views/
    └── {name}/
        ├── index.html.erb         # List view
        ├── show.html.erb          # Detail view
        ├── new.html.erb           # New form view
        └── edit.html.erb          # Edit form view
```

## Commands

### 1. Generate HMVC Structure (Default)

```bash
# Full command
rails g hmvc_rails {name}

# Short command
hmvc {name}
```

**Example:**
```bash
rails g hmvc_rails products
# Hoặc
hmvc products
```

### 2. Generate với Custom Actions

```bash
rails g hmvc_rails {name} --action {actions_list}
```

**Example:**
```bash
rails g hmvc_rails dashboard --action index show stats analytics
```

### 3. Generate với Custom Forms

```bash
rails g hmvc_rails {name} --action {actions} --form {form_actions}
```

**Example:**
```bash
rails g hmvc_rails orders --action index show checkout confirm --form checkout confirm
```

### 4. Generate với Custom Parent Controller

```bash
rails g hmvc_rails {name} --parent-controller {ParentController}
```

**Example:**
```bash
rails g hmvc_rails admin --parent-controller Admin::BaseController
```

### 5. Skip Forms hoặc Views

```bash
# Skip forms
rails g hmvc_rails {name} --skip-form

# Skip views (useful for API-only)
rails g hmvc_rails {name} --skip-view

# Skip cả hai
rails g hmvc_rails {name} --skip-form --skip-view
```

### 6. API Mode

```bash
rails g hmvc_rails:install --api
```

### 7. Rollback

```bash
rails d hmvc_rails {name}
```

## Workflow

### Step 1: Analyze Requirements

Khi user request tạo HMVC structure, hãy xác định:
- **Controller name**: singular hoặc plural? (thường là plural cho resources)
- **Actions needed**: CRUD hoặc custom?
- **Forms needed**: Actions nào cần form object?
- **Parent controller**: ApplicationController hoặc custom?
- **Skip options**: Cần forms/views không?

### Step 2: Generate Command

Dựa vào requirements, xây dựng command phù hợp:

```bash
rails g hmvc_rails {name} [options]
```

### Step 3: Verify Generated Files

Kiểm tra các files đã được tạo:
- Controller file
- Operation files
- Form files (nếu không skip)
- View files (nếu không skip)

### Step 4: Review Generated Code

Đảm bảo code tuân theo:
- File traces (creator, created_at)
- Proper inheritance
- Correct naming conventions

## Templates

### Controller Template

```ruby
# frozen_string_literal: true

# Created at: {timestamp}
# Creator: {author}

class {Name}Controller < {ParentController}
  def index
    @{name}_operation = {Name}::IndexOperation.call(params: params)
  end

  def show
    @{name}_operation = {Name}::ShowOperation.call(params: params)
  end

  def new
    @{name}_form = {Name}::NewForm.new
  end

  def create
    @{name}_form = {Name}::CreateForm.new(params: params)
    if @{name}_form.save
      redirect_to {name}_path, notice: "Successfully created"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @{name}_form = {Name}::EditForm.new({model}: @{model})
  end

  def update
    @{name}_form = {Name}::UpdateForm.new(params: params, {model}: @{model})
    if @{name}_form.save
      redirect_to @{model}, notice: "Successfully updated"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @{name}_operation = {Name}::DestroyOperation.call(params: params)
    redirect_to {name}_path, notice: "Successfully deleted"
  end

  private

  def set_{model}
    @{model} = {Model}.find(params[:id])
  end
end
```

### Operation Template

```ruby
# frozen_string_literal: true

# Created at: {timestamp}
# Creator: {author}

module {Name}
  class {Action}Operation < ApplicationOperation
    def call
      # Step 1: Setup
      step_setup

      # Step 2: Process
      step_process

      # Step 3: Return result
      success(result)
    end

    private

    def step_setup
      # Initialize variables, load records
    end

    def step_process
      # Main business logic
    end

    def result
      # Return structured result
      OpenStruct.new(success: true, data: @data)
    end
  end
end
```

### Form Template

```ruby
# frozen_string_literal: true

# Created at: {timestamp}
# Creator: {author}

module {Name}
  class {Action}Form < ApplicationForm
    # Attributes
    attribute :name, String
    attribute :email, String

    # Validations
    validates :name, presence: true
    validates :email, presence: true, email: true

    def save
      return false unless valid?

      ActiveRecord::Base.transaction do
        create_record!
      end
      true
    rescue ActiveRecord::RecordInvalid => e
      errors.add(:base, e.message)
      false
    end

    private

    def create_record!
      {Model}.create!(attributes)
    end
  end
end
```

### View Templates

#### Index View

```erb
<%# Created at: {timestamp} %>
<%# Creator: {author} %>

<div class="{name}-index">
  <h1>{Name}</h1>

  <div class="actions">
    <%= link_to "New {Name}", new_{name}_path, class: "btn btn-primary" %>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <% @{name}_operation.records.each do |record| %>
        <tr>
          <td><%= record.name %></td>
          <td>
            <%= link_to "Show", record %>
            <%= link_to "Edit", edit_{name}_path(record) %>
            <%= button_to "Delete", record, method: :delete %>
          </td>
        </tr>
      <% end %>
    </tbody>
  </table>
</div>
```

#### Show View

```erb
<%# Created at: {timestamp} %>
<%# Creator: {author} %>

<div class="{name}-show">
  <h1>{Name} Details</h1>

  <div class="actions">
    <%= link_to "Back", {name}_path %>
    <%= link_to "Edit", edit_{name}_path(@{model}) %>
  </div>

  <dl>
    <dt>Name:</dt>
    <dd><%= @{name}_operation.record.name %></dd>
  </dl>
</div>
```

#### New/Edit View

```erb
<%# Created at: {timestamp} %>
<%# Creator: {author} %>

<div class="{name}-form">
  <h1><%= action_name.titleize %> {Name}</h1>

  <%= form_with model: @{name}_form, url: {name}_path, local: true do |f| %>
    <% if @{name}_form.errors.any? %>
      <div class="errors">
        <% @{name}_form.errors.full_messages.each do |msg| %>
          <p><%= msg %></p>
        <% end %>
      </div>
    <% end %>

    <div class="field">
      <%= f.label :name %>
      <%= f.text_field :name %>
    </div>

    <div class="actions">
      <%= f.submit class: "btn btn-primary" %>
    </div>
  <% end %>
</div>
```

## Configuration

File `config/initializers/hmvc.rb`:

```ruby
# frozen_string_literal: true

if Rails.env.development?
  Hmvc::Rails.configure do |config|
    # Parent class cho controllers
    # config.parent_controller = "ApplicationController"

    # Default actions cho operations
    # config.action = %w[index show new create edit update destroy]

    # Default actions cho views
    # config.view = %w[index show new edit]

    # Parent class cho forms
    # config.parent_form = "ApplicationForm"

    # Default actions cho forms
    # config.form = %w[new create edit update]

    # Parent class cho operations
    # config.parent_operation = "ApplicationOperation"

    # Thêm author và timestamp vào files
    # config.file_traces = true
  end
end
```

## Best Practices

### 1. Operation Pattern

```ruby
# GOOD: Step-based operations
class CreateOrderOperation < ApplicationOperation
  def call
    step_validate
    step_create_order
    step_notify_user
    success(result)
  end

  private

  def step_validate
    # Validation logic
  end

  def step_create_order
    # Creation logic
  end

  def step_notify_user
    # Notification logic
  end
end

# BAD: All logic in one method
class CreateOrderOperation < ApplicationOperation
  def call
    # 100 lines of mixed logic
  end
end
```

### 2. Form Object Pattern

```ruby
# GOOD: Form with validation and save
class Order::CheckoutForm < ApplicationForm
  attribute :customer_name, String
  attribute :address, String
  attribute :payment_method, String

  validates :customer_name, presence: true
  validates :address, presence: true
  validates :payment_method, inclusion: { in: %w[cod card] }

  def save
    return false unless valid?

    ActiveRecord::Base.transaction do
      order = create_order
      create_payment(order)
      send_confirmation(order)
    end
    true
  rescue => e
    errors.add(:base, e.message)
    false
  end
end

# BAD: No validation, direct save
class Order::CheckoutForm < ApplicationForm
  def save
    Order.create!(attributes)  # No validation, no transaction
  end
end
```

### 3. Skinny Controller

```ruby
# GOOD: Controller delegates to operation/form
class OrdersController < ApplicationController
  def create
    @order_form = Order::CreateForm.new(params: order_params)
    if @order_form.save
      redirect_to @order_form.order, notice: "Order created"
    else
      render :new, status: :unprocessable_entity
    end
  end
end

# BAD: Controller contains business logic
class OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)
    @order.calculate_total  # Business logic in controller!
    @order.apply_discount    # Business logic in controller!
    if @order.save
      # ...
    end
  end
end
```

### 4. NRO Domain Examples

#### Game Account Marketplace

```bash
# Generate marketplace posts HMVC
rails g hmvc_rails posts --action index show new create edit update destroy search
```

```ruby
# app/operations/posts/search_operation.rb
module Posts
  class SearchOperation < ApplicationOperation
    def call
      step_load_posts
      step_filter_by_game
      step_sort_results
      success(result)
    end

    private

    def step_load_posts
      @posts = Post.active.includes(:account, :game_profile)
    end

    def step_filter_by_game
      @posts = @posts.where(game_title: params[:game]) if params[:game].present?
    end

    def step_sort_results
      @posts = @posts.order(created_at: :desc)
    end

    def result
      OpenStruct.new(posts: @posts)
    end
  end
end
```

#### Payment Processing

```bash
# Generate payments HMVC (API-only, no views)
rails g hmvc_rails payments --action create confirm cancel --skip-view
```

```ruby
# app/forms/payments/create_form.rb
module Payments
  class CreateForm < ApplicationForm
    attribute :amount, Integer
    attribute :payment_method, String
    attribute :post_id, Integer

    validates :amount, presence: true, numericality: { greater_than: 0 }
    validates :payment_method, inclusion: { in: %w[balance banking momo] }
    validates :post_id, presence: true

    def save
      return false unless valid?

      ActiveRecord::Base.transaction do
        create_order
        process_payment
        update_post_status
      end
      true
    rescue PaymentError => e
      errors.add(:base, "Payment failed: #{e.message}")
      false
    end
  end
end
```

## RuboCop Configuration

Thêm vào `.rubocop.yml`:

```yaml
require: rubocop/cop/hmvc_rails_cops

HmvcRails/OperatingStyle:
  Enabled: true
  Include:
    - app/operations/**/*.rb

HmvcRails/FormalStyle:
  Enabled: true
  Include:
    - app/forms/**/*.rb
```

## Common Issues & Solutions

### Issue 1: Operation naming convention

```
# Error
HmvcRails/OperatingStyle: Method works in "call" without prefix "step_"
def call
  process_data  # BAD
end

# Solution
def call
  step_process_data  # GOOD
end
```

### Issue 2: Form naming convention

```
# Error
HmvcRails/FormalStyle: The form filename does not match the desired format
class OrderForm < ApplicationForm  # BAD

# Solution
class Order::CreateForm < ApplicationForm  # GOOD
```

## Checklist Before Generation

- [ ] Xác định controller name (singular/plural)
- [ ] Liệt kê các actions cần thiết
- [ ] Xác định actions cần form objects
- [ ] Kiểm tra parent controller
- [ ] Quyết định có cần forms/views không
- [ ] Run generator command
- [ ] Verify generated files
- [ ] Review code theo templates
- [ ] Run RuboCop để check conventions
