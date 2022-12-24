import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { AppCol, AppRow } from "components/elements";
import { AppTitle } from "components/elements/AppTitle";
import React from "react";

const BasicInfo = () => {
  return (
    <Box
      pt="170px"
      background="linear-gradient(180deg, rgba(227,197,236,1) 0%, rgba(214,198,224,1) 52%, rgba(255,255,255,1) 100%)"
    >
      <Center>
        <AppRow>
          <Image
            src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg"
            w="150px"
            h="150px"
            borderRadius="50%"
            objectFit="cover"
          />
          <AppCol align="flex-start" ml="2.7em">
            <AppTitle fontSize="40px">Harry</AppTitle>
            <Text mb="1.2em">Vietnam</Text>
            <Button
              fontWeight="500"
              fontSize="14px"
              borderWidth={1}
              backgroundColor="#ea4c89"
              paddingX="1em"
            >
              Edit Profile
            </Button>
          </AppCol>
        </AppRow>
      </Center>
    </Box>
  );
};

export default BasicInfo;
