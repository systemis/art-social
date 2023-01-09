import {Box} from '@chakra-ui/react'
import DesignCard from 'components/shared/DesignCard';
import React from 'react'

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
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {(products?.map((product: ProductProps) => {
        return (
          <DesignCard key={product._id} listProduct={product} />
        );
      }))}
    </Box>
  )
}

export default DesignTab