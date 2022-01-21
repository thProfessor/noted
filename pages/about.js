import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { GridItem } from '../components/grid-item'
import Section from '../components/section'
import { SocialMedia } from '../public/data/files'

const About = () => {
  return (
    <Container position="relative" zIndex={1}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        DO Write To Me
      </Box>
      <Section delay={0.1} mt={2}>
        <Heading as="h3" variant="section-title">
          My name is Utkarsh Shukla
        </Heading>{' '}
        IIT BHU 2022 batch , incoming SDE Amex!
        <SimpleGrid columns={[2, 2, 2]} gap={6}>
          {SocialMedia.map(item => (
            <Section key={item.index}>
              <GridItem
                title={item.title}
                href={item.href}
                thumbnail={item.thumbnail}
                download={false}
              >
                {item.details}
              </GridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  )
}

export default About
