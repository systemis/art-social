// Chakra imports
import {
  Badge,
  Box,
  DarkMode,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AppCol } from "components/elements";
import React from "react";

export const CarouselCard = () => {
  const boxBg = useColorModeValue("white !important", "#111c44 !important");
  return (
    <Box
      borderRadius="20px"
      bg={boxBg}
      h={{ base: "270px", md: "300px", lg: '350px' }}
      w={{ base: "100%", md: "100%" }}
      alignItems="center"
      pos="relative"
      overflow="hidden"
      cursor="pointer"
    >
      <Image
        src="https://i.seadn.io/s/production/4541c8d0-0ed1-4a25-a93d-8bb55dc76653.png?auto=format&w=1920"
        borderRadius="20px"
        pos="absolute"
        transition="0.4s"
        _hover={{transform: 'scale(1.1)'}}
        objectFit="cover"
      />
      <AppCol
        pos="absolute"
        background="linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(115,115,115,0) 100%, rgba(255,255,255,0) 100%)"
        bottom="0"
        color="white"
        w="full"
        borderBottomRadius="20px"
        p="15px"
      >
        <Text fontWeight="600" textAlign="start" fontSize="lg" w="100%">
          Geometric Gems
        </Text>
        <Text textAlign="start" fontSize="xs">Harry Dep trai</Text>
      </AppCol>
    </Box>
  );
};
