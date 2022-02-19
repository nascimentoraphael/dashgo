import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Rapha Nasci</Text>
        <Text color="gray.300" fontSize="small">
          nascimentoraphael@yahoo.com.br
        </Text>
      </Box>
      )} 

        <Avatar size="md" name="Rapha Nasci" src="https://github.com/nasciraphael.png"/>
      </Flex>
  )
}