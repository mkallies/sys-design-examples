import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeSwitcherProvider } from "./theme-context"

ReactDOM.render(
  <ThemeSwitcherProvider>
    <App />
  </ThemeSwitcherProvider>,
  document.getElementById("root")
)
