import React from "react"
import { Box } from "./box"
import { Text } from "./text"
import { Button } from "./button"

export const Card = () => {
  return (
    <Box borderRadius="10px" px={3} width={0.3} maxWidth="33%" mb={4}>
      <Box
        flexDirection="column"
        boxShadow="0 .125rem .25rem rgba(0,0,0,.075)"
        border="1px solid rgba(0,0,0,.125)"
      >
        <Box
          bg="darkGray"
          alignItems="center"
          justifyContent="center"
          height="225px"
        >
          <Text color="gray">Thumbnail</Text>
        </Box>

        <Box p={3} display="block">
          <Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Text>

          <Box justifyContent="space-between">
            <Box>
              <Button>View</Button>
              <Button>Edit</Button>
            </Box>

            <Text>9 mins</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
