import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "pages/explore/components/Header";
import ExploreSection from "pages/explore/components/ExploreSection";

const Explore = () => {
  return (
    <Box>
      <Header />
      <ExploreSection />
    </Box>
  );
};

export default Explore;