import React from "react"
import styled from "styled-components"
import { Button, Box, Text } from "./components"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Album from "./Album"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Box display="block">
        <Text fontSize={[7, 5, 3, 1]} variant="caps">
          Hello
        </Text>

        <Box>Box</Box>

        <Button>Button</Button>

        <Text>Text</Text>
      </Box> */}
      <Album />
    </ThemeProvider>
  )
}

export default App
