import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsSuitHeartFill } from "react-icons/bs";

export const UserHeader = () => {
  const toast = useToast();
  return (
    <Box
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
      }}
      pt={{ base: "30px" }}
    >
      <Flex justify={"center"}>
        <Box
          w={{
            base: "100%",
            sm: "60%",
            md: "50%",
            lg: "35%",
          }}
          ml={{
            base: "10px",
            sm: "45px",
            md: "0",
            lg: "0",
          }}
        >
          <Avatar
            cursor={"pointer"}
            float={"left"}
            src="https://bit.ly/sage-adebayo"
            size={"lg"}
          />
          <Box float={"left"} ml="3" lineHeight={"8"}>
            <Text cursor={"pointer"} fontSize="18px" fontWeight="bold">
              Segun Adebayo
            </Text>
            <Text cursor={"pointer"} fontSize="sm">
              <Text>Update your username and manage your account</Text>
            </Text>
          </Box>
        </Box>
        <Box flex={{ base: 1, md: 0 }} display={"flex"} letterSpacing={1}>
          <Button
            float={"left"}
            mx={{ md: "10px" }}
            w={"300px"}
            height={"65px"}
            display={{ base: "none", md: "inline-flex" }}
            letterSpacing={"1px"}
            // href={'#'}
            color={"black"}
            border={"1px solid #dcdcdc"}
            _hover={{
              bg: "#c0c0c0",
              borderColor: "#d3d3d3",
            }}
          >
            <Center>
              <Box justifyContent={"center"} float={"left"} lineHeight={"7"}>
                <Text fontWeight="900" fontSize={"18px"}>
                  Go Pro
                </Text>
                <Text fontSize={"12px"}>
                  Add power features for just $5/month
                </Text>
              </Box>
            </Center>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
