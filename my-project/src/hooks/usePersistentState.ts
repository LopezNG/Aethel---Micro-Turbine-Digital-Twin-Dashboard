import { useEffect, useState } from 'react'

export function usePersistentState<T>(
  key: string,
  initial: T,
): [T, (next: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initial
    const raw = window.localStorage.getItem(key)
    if (raw === null) return initial
    try {
      return JSON.parse(raw) as T
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore storage errors
    }
  }, [key, value])

  return [value, setValue]
}
