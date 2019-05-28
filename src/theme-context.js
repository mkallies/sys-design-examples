import React, { useState, createContext, useContext } from "react"
import Theme from "./theme"

console.log("THEME", Theme)

const ThemeContext = createContext()

function ThemeSwitcherProvider(props) {
  const [theme, setTheme] = useState(Theme)
  const [mode, setMode] = useState("light")

  const handleThemeChange = newMode => {
    const newTheme = { ...Theme, colors: Theme.colors.modes[newMode] }

    console.log("Theme", Theme.colors)
    console.log("newmode", newMode)

    console.log("newTheme", newTheme)

    setTheme(newTheme)
    setMode(newMode)
  }

  const value = {
    theme,
    mode,
    setMode,
    changeTheme: handleThemeChange
  }

  return <ThemeContext.Provider value={value} {...props} />
}

function useThemeSwitcher() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error(
      "useThemeSwitcher must be used within a ThemeSwitcherProvider"
    )
  }

  return context
}

export { ThemeSwitcherProvider, useThemeSwitcher }
