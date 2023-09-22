import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'

interface UseThemeResult {
  theme: Theme
  changeTheme: () => void
}

export function useTheme (): UseThemeResult {
  const context = useContext(ThemeContext)

  // Проверяем, есть ли контекст
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const { theme, setTheme } = context

  if (typeof theme === 'undefined') {
    throw new Error('theme value is not provided in ThemeContext')
  }

  if (!setTheme) {
    throw new Error('setTheme function is not provided in ThemeContext')
  }

  const changeTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, changeTheme }
}
