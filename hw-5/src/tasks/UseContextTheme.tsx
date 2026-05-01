import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}

function ThemeInfo() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-panel">
      <p className="task-label">Текущая тема: {theme}</p>

      <button type="button" onClick={toggleTheme}>
        Переключить тему
      </button>
    </div>
  )
}

function ThemedContent() {
  const { theme } = useTheme()

  return (
    <div className="theme-content">
      <h3>Дочерний компонент</h3>
      <p>
        Этот блок получает тему через useContext. Сейчас активна тема: {theme}.
      </p>
    </div>
  )
}

export function UseContextTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section className={`task-card theme-card ${theme}`}>
        <h2>1.1 useContext: тема</h2>
        <ThemeInfo />
        <ThemedContent />
      </section>
    </ThemeContext.Provider>
  )
}
