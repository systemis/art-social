import { Box } from "@chakra-ui/react";
import React from "react";
import { LIST_PRODUCTS } from "constants/designs";
import DesignCard from "components/shared/DesignCard";

export const ListProduct = () => {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {LIST_PRODUCTS.slice(0, 3).map((listProduct) => {
        return <DesignCard key={listProduct.title} listProduct={listProduct} />;
      })}
    </Box>
  );
};
