import { useRef } from "react";
import React from "react";
import {
  Box
} from "@chakra-ui/react";
import { LIST_PRODUCTS } from "constants/designs";
import DesignCard from "components/shared/DesignCard";

const ExploreSection = () => {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {LIST_PRODUCTS.map((listProduct) => {
        return (
          <DesignCard key={listProduct.title} listProduct={listProduct} />
        );
      })}
    </Box>
  );
};

export default ExploreSection;
