import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'
import { STORAGE_KEYS } from '@/lib/constants'

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  setTokens: (accessToken: string) => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: true,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setTokens: (accessToken) => {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken)
        set({ accessToken })
      },

      setLoading: (isLoading) => set({ isLoading }),

      logout: () => {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
)
