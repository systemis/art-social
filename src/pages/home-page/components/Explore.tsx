import { Box, Center, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/css/main.css";
import { Logo } from "assets/images/index";

const Explore = () => {
  return (
    <Box textAlign="center" marginBottom="40px">
      <Container maxW="container" px="0" mx="0" position="relative">
        <Image
          src="https://i.seadn.io/gcs/files/34b9b2939f421c213a82cfbbce46fc89.png?auto=format&w=3840"
          w="full"
          h="60vh"
          objectFit="cover"
        />
      </Container>
    </Box>
  );
};

export default Explore;