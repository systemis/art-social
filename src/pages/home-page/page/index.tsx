import { Box } from '@chakra-ui/react'
import React from 'react'
import Explore from 'pages/home-page/components/Explore'
import Trending from 'pages/home-page/components/Trending'
import Marketplace from 'pages/home-page/components/Marketplace'

const HomePage = () => {
  return (
    <Box>
      <Explore />
      <Trending />
      <Marketplace />
    </Box>
  )
}

export default HomePage;