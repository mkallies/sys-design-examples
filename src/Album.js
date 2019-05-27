import React from "react"
import { Box, Button, Text, Card } from "./components"

const cards = Array.from({ length: 9 }, (v, i) => i)

const Album = () => {
  return (
    <Box display="block">
      <Box as="header">I am navbar</Box>

      <Box
        as="main"
        role="main"
        mx="auto"
        px={2}
        flexDirection="column"
        py={5}
        alignItems="center"
      >
        <Text as="h1">Album example</Text>
        <Text textAlign="center" width={1 / 2} fontSize={4} fontWeight="300">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </Text>

        <Box>
          <Button mr={2} variant="primary">
            Main call to action
          </Button>

          <Button variant="secondary">Secondary action</Button>
        </Box>
      </Box>

      <Box flexWrap="wrap" maxWidth="1140px" mx="auto">
        {cards.map(key => (
          <Card key={key} />
        ))}
      </Box>
    </Box>
  )
}

export default Album
