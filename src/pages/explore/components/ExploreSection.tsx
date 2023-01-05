import { useEffect, useState } from "react";
import React from "react";
import {
  Box
} from "@chakra-ui/react";
import DesignCard from "components/shared/DesignCard";
import { networkProvider } from "providers/network.provider";
import { ProductEntity } from "entity/product.entity";

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  gallery: string[];
  tags: string[];
  owner: any
}


const ExploreSection = () => {
  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true)
    const response = await networkProvider.request<ProductEntity>("/products", {
      method: "GET"
    });
    setProducts(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {!loading && (products?.map((product: ProductProps) => {
        return (
          <DesignCard key={product._id} listProduct={product} />
        );
      }))}
    </Box>
  );
};

export default ExploreSection;
