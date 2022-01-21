import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail, download }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} placeholder="blur" loading="lazy" />
      <LinkOverlay href={href} target="_blank" download={download}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
