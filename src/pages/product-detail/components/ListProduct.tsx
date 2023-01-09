import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DesignCard from "components/shared/DesignCard";
import { networkProvider } from "providers/network.provider";
import { ProductEntity } from "entity/product.entity";

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

export const ListProduct = () => {
  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await networkProvider.request<ProductEntity>("/products", {
      method: "GET",
    });
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      mt="7vh"
    >
      {products?.slice(0, 3).map((product: ProductProps) => {
        return <DesignCard key={product._id} listProduct={product} />;
      })}
    </Box>
  );
};
