import {Box, Icon} from '@chakra-ui/react'
import DesignCard from 'components/shared/DesignCard';
import React from 'react'
import {BsPlusLg} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';

interface OwnerProps {
  name: string;
  picture: string;
  username: string;
}

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  gallery: string[];
  tags: string[];
  owner: OwnerProps;
}

interface Product {
  listProduct: ProductProps;
}

const DesignTab = ({products}: any) => {
  const history = useHistory()
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      my={7}
    >
      {(products?.map((product: ProductProps) => {
        return (
          <DesignCard key={product._id} listProduct={product} />
        );
      }))}
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
          onClick={() => history.push("/create/new")}
        >
          <Icon as={BsPlusLg} boxSize={16} color="#e7e7e9" />
        </Box>
    </Box>
  )
}

export default DesignTab