import React from "react"
import { Box, Button, Text, Card } from "./components"
import { useThemeSwitcher } from "./theme-context"

const cards = Array.from({ length: 9 }, (v, i) => i)

const Album = () => {
  const { mode, changeTheme } = useThemeSwitcher()

  const handleThemeChange = () => {
    changeTheme(mode === "light" ? "dark" : "light")
  }

  return (
    <Box display="block">
      <Box
        as="header"
        height="5rem"
        bg="black"
        color="white"
        alignItems="center"
        justifyContent="space-between"
        px={5}
      >
        <Text fontSize={3}>styled-system #1</Text>
        <Button onClick={handleThemeChange}>Change theme</Button>
      </Box>

      <Box
        as="main"
        role="main"
        mx="auto"
        px={2}
        flexDirection="column"
        py={5}
        alignItems="center"
      >
        <Text as="h1" fontSize={6} fontWeight={0}>
          Album example
        </Text>
        <Text
          my={4}
          textAlign="center"
          width={1 / 2}
          fontSize={4}
          lineHeight={1}
          fontWeight={0}
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </Text>

        <Box>
          <Button mr={2} variant="primary" fontSize={2} fontWeight={300}>
            Main call to action
          </Button>

          <Button variant="secondary" fontSize={2} fontWeight={300}>
            Secondary action
          </Button>
        </Box>
      </Box>

      <Box bg="primary" pt={5} justifyContent="center">
        <Box flexWrap="wrap" maxWidth="1140px" justifyContent="center">
          {cards.map(key => (
            <Card key={key} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Album
