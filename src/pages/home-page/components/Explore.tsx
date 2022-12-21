import { Box, Center, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/css/main.css";
import { Logo } from "assets/images/index";
import { AppTitle } from "components/elements/AppTitle";

const Explore = () => {
  return (
    <Box textAlign="center" marginBottom="40px">
      <Container maxW="container" px="0" mx="0" position="relative">
        <Image
          src="https://cdn.wallpapersafari.com/8/78/zmcOPM.jpg"
          w="full"
          h="60vh"
          objectFit="cover"
          objectPosition="0 95%"
        />
        <Center>
          <Image src={Logo} pos="absolute" top={{base: "22vh", lg: "15vh"}} w={{ base: "70vw", lg: "50vw", xl: "20vw" }}/>
        </Center>
      </Container>
    </Box>
  );
};

export default Explore;
