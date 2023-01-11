import {Box, Icon} from '@chakra-ui/react'
import React from 'react'
import {BsPlusLg} from 'react-icons/bs'
import {useHistory} from 'react-router-dom'

const CollectionTab = () => {
  const history = useHistory();
  return (
    <Box my={7}>
        <Box
          w="260px"
          borderColor="#e7e7e9"
          borderWidth={3}
          height="230px"
          borderStyle="dashed"
          borderRadius=".5em"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => history.push("/create/new-project")}
        >
          <Icon as={BsPlusLg} boxSize={16} color="#e7e7e9" />
        </Box>
    </Box>
  )
}

export default CollectionTab