# Git Workflow & Branching Rules

## Branch Naming Convention

### Format
```
<type>/<ticket-id>-<short-description>
```

### Branch Types
| Type | Mô tả | Ví dụ |
|------|-------|-------|
| `feat` | Tính năng mới | `feat/AI-001-chat-interface` |
| `fix` | Bug fix | `fix/AI-002-login-error` |
| `refactor` | Tái cấu trúc code | `refactor/AI-003-auth-module` |
| `style` | Thay đổi UI/CSS không ảnh hưởng logic | `style/AI-004-button-colors` |
| `docs` | Cập nhật documentation | `docs/AI-005-api-guide` |
| `test` | Thêm/sửa tests | `test/AI-006-auth-tests` |
| `chore` | Tasks bảo trì, config | `chore/AI-007-update-deps` |
| `perf` | Tối ưu performance | `perf/AI-008-load-time` |
| `ci` | Cập nhật CI/CD | `ci/AI-009-github-actions` |

### Quy tắc đặt tên nhánh
- **Viết thường** (lowercase)
- **Dùng dấu gạch ngang** `-` thay vì underscore `_`
- **Ngắn gọn, mô tả chính xác** tính năng
- **Không dùng tiếng Việt** trong tên nhánh
- **Không dùng số đứng đầu** (trừ ticket ID)

### Ví dụ đúng ✅
```
feat/AI-001-user-authentication
fix/AI-015-cart-total-bug
refactor/AI-023-payment-flow
```

### Ví dụ sai ❌
```
feature/user-authentication  (sai type)
fix_login_bug               (dùng underscore)
feat/User-Authentication    (viết hoa)
fix/cart                    (thiếu ticket ID)
feat/001-add-login          (sai thứ tự)
```

## Branch Protection Rules

### Protected Branches
- `main` - Branch production, **KHÔNG ĐƯỢC PUSH TRỰC TIẾP**
- `develop` - Branch development, **KHÔNG ĐƯỢC PUSH TRỰC TIẾP**

### Workflow
```
feat/xxx → develop → main
```

1. Tạo nhánh từ `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/AI-001-feature-name
   ```

2. Làm việc trên nhánh feature:
   ```bash
   git add .
   git commit -m "feat: add user authentication"
   git push origin feat/AI-001-feature-name
   ```

3. Tạo Pull Request vào `develop`

4. Sau khi review và merge, xóa nhánh feature

5. Khi release, merge `develop` vào `main`

## Commit Message Convention

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types (giống branch types)
- `feat`: Tính năng mới
- `fix`: Bug fix
- `refactor`: Refactor code
- `style`: Format, CSS
- `docs`: Documentation
- `test`: Tests
- `chore`: Bảo trì
- `perf`: Performance
- `ci`: CI/CD

### Ví dụ
```bash
feat(auth): add JWT token refresh

- Implement token refresh logic
- Add refresh token storage
- Handle expired token errors

Closes #123
```

### Quy tắc commit
- **Viết tiếng Anh**
- **Subject không quá 50 ký tự**
- **Body giải thích WHAT và WHY, không phải HOW**
- **Dùng imperative mood** ("add" không phải "added")

## Quy trình làm việc chuẩn

### 1. Bắt đầu task mới
```bash
# Cập nhật develop
git checkout develop
git pull origin develop

# Tạo nhánh mới
git checkout -b feat/AI-001-feature-name
```

### 2. Trong quá trình phát triển
```bash
# Commit thường xuyên
git add .
git commit -m "feat(scope): description"

# Push lên remote
git push origin feat/AI-001-feature-name
```

### 3. Hoàn thành task
```bash
# Cập nhật từ develop
git fetch origin develop
git rebase origin/develop

# Push lại
git push origin feat/AI-001-feature-name --force-with-lease

# Tạo Pull Request trên GitHub
```

### 4. Sau khi merge PR
```bash
# Xóa nhánh local
git checkout develop
git pull origin develop
git branch -d feat/AI-001-feature-name

# Xóa nhánh remote (nếu chưa tự xóa)
git push origin --delete feat/AI-001-feature-name
```

## Checklist trước khi tạo PR

- [ ] Nhánh có tên đúng convention
- [ ] Commit messages đúng format
- [ ] Không có conflicts với develop
- [ ] Code đã pass lint và tests
- [ ] Không có console.log hay debug code
- [ ] Đã test kỹ functionality
