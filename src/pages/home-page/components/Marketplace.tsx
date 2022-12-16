import { Box, Container, Text } from "@chakra-ui/react";
import { AppTitle } from "components/elements/AppTitle";
import ExploreSection from "pages/explore/components/ExploreSection";
import React from "react";

const Marketplace = () => {
  return (
    <Box>
      <Container maxW="container" px="3rem">
        <AppTitle
          fontSize={{ base: "3xl", lg: "5xl" }}
          mt={10}
          textAlign="center"
        >
          Marketplace
        </AppTitle>
        <Text textAlign="center" pb="30px">
          9,250 inspirational designs, illustrations, and graphic elements from
          the world’s best designers. <br />
          Want more inspiration? Browse our{" "}
          <Text as="span" color="rgb(227,107,236)" cursor="pointer">
            marketplace...
          </Text>
        </Text>
        <ExploreSection />
      </Container>
    </Box>
  );
};

export default Marketplace;
