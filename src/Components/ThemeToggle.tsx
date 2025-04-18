'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark'
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md border text-sm border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}
