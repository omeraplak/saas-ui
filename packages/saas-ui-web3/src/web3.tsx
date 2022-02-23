import * as React from 'react'

import { useColorModeValue, Heading, Text, Box, Flex } from '@chakra-ui/react'

export interface Web3Props {
  title: string
}

export const Web3: React.FC<Web3Props> = ({ title }) => {
  const bg = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <Flex as="article" bg={bg} color={color} w="full">
      <Heading as="h2" fontSize="3xl">
        {title}
      </Heading>
      <Box>
        <Text>This component was generated by Hygen</Text>
      </Box>
    </Flex>
  )
}