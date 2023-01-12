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
          src="https://img.freepik.com/premium-vector/golden-mountain-line-art-abstract-mountain-contemporary-aesthetic-backgrounds-landscapes-use-print-art-cover-invitation-background-fabric-vector-illustration_69626-153.jpg?w=2000"
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
