import axios from 'axios'
import { API_BASE_URL, API_TIMEOUT, STORAGE_KEYS } from '@/lib/constants'
import type { APIError } from '@/types'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // Handle 401 - Token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Try to refresh token
        const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          })

          const { accessToken } = response.data.data
          localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken)

          originalRequest.headers.Authorization = `Bearer ${accessToken}`
          return api(originalRequest)
        }
      } catch {
        // Refresh failed - clear tokens and redirect to login
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
        window.location.href = '/auth/login'
      }
    }

    // Format error
    const apiError: APIError = {
      message: error.response?.data?.message || error.message || 'An error occurred',
      code: error.response?.data?.code || 'UNKNOWN_ERROR',
      status: error.response?.status || 500,
      errors: error.response?.data?.errors,
    }

    return Promise.reject(apiError)
  }
)

export default api
