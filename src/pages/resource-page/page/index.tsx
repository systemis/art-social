import {Center, Image, Text} from '@chakra-ui/react'
import {AppCol} from 'components/elements'
import {Logo} from 'assets/images'
import React from 'react'
import {AppTitle} from 'components/elements/AppTitle'

const index = () => {
  return (
    <Center>
      <AppCol justifyContent="center" alignItems="center" height="100vh">
        <Image src={Logo} w="20vw" mb="2em" />
        <AppTitle fontSize="30px" my="0.5em">This Page is Under Development</AppTitle>
        <Text fontSize='15px' color="#6e6d7a" w="20vw" textAlign="center">We will be celebrating the launch of our new site very soon!</Text>
      </AppCol>
    </Center>
  )
}

export default index