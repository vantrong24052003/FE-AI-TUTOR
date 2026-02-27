import { test, expect } from '@playwright/test'

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /vite \+ react/i })).toBeVisible()
  })

  test('should increment counter on click', async ({ page }) => {
    const button = page.getByRole('button', { name: /count is/i })
    await expect(button).toContainText('count is 0')

    await button.click()
    await expect(button).toContainText('count is 1')

    await button.click()
    await expect(button).toContainText('count is 2')
  })
})
