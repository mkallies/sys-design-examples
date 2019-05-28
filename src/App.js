import React from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"
import Album from "./Album"
// import { Button, Box, Text } from "./components"
import { useThemeSwitcher } from "./theme-context"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: ${props => props.theme.fonts.body};
  }

  body {
    margin: 0;
    color: ${props => props.theme.colors.text};
    background:  ${props => props.theme.colors.background};
    line-height: ${props => props.theme.lineHeights[2]}
  }
`

function App() {
  const { theme } = useThemeSwitcher()

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {/* <Box display="block">
        <Text fontSize={[7, 5, 3, 1]} variant="caps">
          Hello
        </Text>

        <Box>Box</Box>

        <Button>Button</Button>

        <Text>Text</Text>
      </Box> */}
        <Album />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
