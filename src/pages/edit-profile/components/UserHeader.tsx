import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Tabs,
  Tab,
  InputGroup,
  Input,
  FormLabel,
  FormControl,
  Badge,
  Stack,
  TabList,
  TabPanels,
  TabPanel,
  Link,
  Text,
  useToast,
  Highlight,
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
      <Flex mt={"25px"} justify={"center"}>
        <Box
          display={"flex"}
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
            <Text cursor={"pointer"} fontSize="sm" w={""}>
              <Text>Update your username and manage your account</Text>
            </Text>
          </Box>
        </Box>
        <Box flex={{ base: "none", md: 0 }} display={"flex"} letterSpacing={1}>
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
              bgGradient: "linear(to-r,red.500, yellow.500)",
              borderColor: "#d3d3d3",
              color: "white",
            }}
          >
            <Center>
              <Box
                justifyContent={"center"}
                float={"left"}
                fontSize={"16px"}
                lineHeight={"7"}
                _hover={{ color: "white" }}
              >
                <Text fontWeight="600" _hover={{ color: "White" }}>
                  Go
                  <Highlight
                    query="Pro"
                    styles={{
                      px: "1",
                      color: "pink.500",
                    }}
                  >
                    Pro
                  </Highlight>
                </Text>
                <Text fontSize={"12px"} fontWeight={"400"}>
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
