import {Box} from '@chakra-ui/react'
import React from 'react'
import BasicInfo from 'pages/profile/components/BasicInfo'
import DesignInfo from 'pages/profile/components/DesignInfo'

const Profile = () => {
  return (
    <Box>
        <BasicInfo />
        <DesignInfo />
    </Box>
  )
}

export default Profile