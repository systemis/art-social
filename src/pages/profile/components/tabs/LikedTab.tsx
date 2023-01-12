import { Center } from "@chakra-ui/react";
import { Logo } from "assets/images";
import { Image, Text } from "@chakra-ui/react";
import { AppCol } from "components/elements";
import { AppTitle } from "components/elements/AppTitle";
import React from "react";

const LikedTab = () => {
  return (
    <Center>
      <AppCol justifyContent="center" alignItems="center" height="400px">
        <Image src={Logo} w="20vw" mb="1.5em" />
        <AppTitle fontSize="30px" my="0.5em">
          Save your favourite design ❤
        </AppTitle>
        <Text fontSize="15px" color="#6e6d7a" w="30vw" textAlign="center">
          Click the &quot;❤ liked&quot; button whenever you see a interesting
          design
        </Text>
      </AppCol>
    </Center>
  );
};

export default LikedTab;
