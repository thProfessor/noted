import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { Dsa, Web, Os } from '../public/data/files'

const Home = () => {
  return (
    <Layout>
      <Container position="relative" zIndex={1}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Sharing some of my resources !
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              NOTES
            </Heading>
            <p>
              Click on images to start downloading pdf (DSA / OS / DEV / DBMS)
            </p>
          </Box>
        </Box>

        <Section delay={0.1} mt={2}>
          <Heading as="h3" variant="section-title">
            Data Structure And Algo
          </Heading>{' '}
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {Dsa.map(item => (
              <Section key={item.index}>
                <GridItem
                  title={item.title}
                  href={item.href}
                  thumbnail={item.thumbnail}
                  download={true}
                >
                  {item.details}
                </GridItem>
              </Section>
            ))}
          </SimpleGrid>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Web Dev
          </Heading>{' '}
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {Web.map(item => (
              <Section key={item.index}>
                <GridItem
                  title={item.title}
                  href={item.href}
                  thumbnail={item.thumbnail}
                  download={true}
                >
                  {item.details}
                </GridItem>
              </Section>
            ))}
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Operating System OS
          </Heading>{' '}
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {Os.map(item => (
            <Section key={item.index}>
              <GridItem
                title={item.title}
                href={item.href}
                thumbnail={item.thumbnail}
                download={true}
              >
                {item.details}
              </GridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Home
