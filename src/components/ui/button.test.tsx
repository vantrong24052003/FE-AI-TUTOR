import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders different variants', () => {
    const { rerender } = render(<Button variant='default'>Default</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()

    rerender(<Button variant='destructive'>Destructive</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()

    rerender(<Button variant='outline'>Outline</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
