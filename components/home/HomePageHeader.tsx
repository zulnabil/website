import { Box, Heading, Text } from '@chakra-ui/core'
import * as React from 'react'

import { LinkButton } from '~/components/ui'
import theme from '~/utils/theme'

export interface HomePageHeaderProps {
  title: string
  welcomeMessage?: string
  desc?: string
}

const HomePageHeader: React.FC<HomePageHeaderProps> = ({ welcomeMessage, title, desc }) => {
  return (
    <Box
      backgroundColor="gray.900"
      backgroundImage={`linear-gradient(${theme.colors.gray[900]}, ${theme.colors.gray[800]})`}
      as="header"
      px={[4, null, null, 8]}
      py={['3.1em', null, null, '6.1em']}
    >
      <Box mx="auto" maxWidth="6xl">
        <Box maxWidth={['100%', null, null, '50%']}>
          <Heading fontFamily="body" fontWeight="100" mb="8px" as="h2" color="lightBlue" textTransform="uppercase" fontSize={20}>
            {welcomeMessage}
          </Heading>
          <Heading as="h3" fontFamily="body" fontWeight="500" color="white" fontSize={48}>
            {title}
          </Heading>
          <Text as="p" my="20px" color="white" fontFamily="body">
            {desc}
          </Text>
          <LinkButton href="https://www.meetup.com/reactindonesia/" isExternal ml="-16px" color="white" _hover={{ bg: 'lightGray' }}>
            Bergabung
          </LinkButton>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePageHeader