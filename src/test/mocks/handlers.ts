import { http, HttpResponse } from 'msw'

export const handlers = [
  // Example: Mock API endpoint
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
    })
  }),

  // Add more handlers here
]
