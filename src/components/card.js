import React from "react"
import { Box } from "./box"
import { Text } from "./text"
import { Button } from "./button"

export const Card = () => {
  return (
    <Box px={3} flex="0" flexBasis={1 / 3} mb={4}>
      <Box
        flexDirection="column"
        boxShadow="0 .2rem .4rem rgba(0,0,0,.075)"
        border="1px solid"
        borderColor="lightGray"
        borderRadius=".3rem"
        overflow="hidden"
      >
        <Box
          bg="darkGray"
          alignItems="center"
          justifyContent="center"
          height="225px"
        >
          <Text color="gray" fontSize={3}>
            Thumbnail
          </Text>
        </Box>

        <Box p={3} display="block">
          <Text fontSize={2}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Text>

          <Box mt={3} justifyContent="space-between" alignItems="center">
            <Box>
              <Button mr={1} variant="minimal">
                View
              </Button>
              <Button variant="minimal">Edit</Button>
            </Box>

            <Text fontSize={0}>9 mins</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
