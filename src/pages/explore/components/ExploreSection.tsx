import { useEffect, useState } from "react";
import React from "react";
import { Box, Center, Spinner } from "@chakra-ui/react";
import DesignCard from "components/shared/DesignCard";
import { AppDispatch } from "redux/root-store";
import { useDispatch } from "react-redux";
import { fetchProducts } from "redux/products/thunk";

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

const ExploreSection = () => {
  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    const response = await dispatch(fetchProducts());
    setProducts(response.payload);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Center height="60vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#ea4c89"
          size="xl"
        />
        ;
      </Center>
    );
  } else {
    return (
      <Box
        position={"relative"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {!loading &&
          products?.map((product: ProductProps) => {
            return <DesignCard key={product._id} listProduct={product} />;
          })}
      </Box>
    );
  }
};

export default ExploreSection;
