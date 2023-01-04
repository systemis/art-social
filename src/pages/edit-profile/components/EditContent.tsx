import React from "react";
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  Flex,
  Avatar,
  Center,
  Link,
  InputGroup,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
export const EditContent = () => {
  return (
    <Tabs
      mt={"30px"}
      display={{ lg: "flex" }}
      variant={{ base: "solid", md: "ghost" }}
    >
      <TabList flexDirection={"column"} mx={"auto"}>
        <Tab> General</Tab>
        <Tab>Edit Profile</Tab>
      </TabList>
      <TabPanels flex={"0.8"}>
        <TabPanel>
          <Box pt={5}>
            <Stack w={{ lg: "40%" }} spacing={4} lineHeight={"30px"}>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Username
                </FormLabel>
                <Input
                  border={"2px"}
                  borderRadius={"10px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="text"
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                />
                <Text fontSize={"15px"} color={"gray.400"}>
                  Your Imaginary URL: https://imaginary.com/{"MinhHung123"}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Email
                </FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                  />
                </InputGroup>
              </FormControl>
              <Text fontSize="black" fontWeight="600">
                Segun Adebayo
                <Badge
                  borderRadius={"10%"}
                  size={"sm"}
                  ml="1"
                  colorScheme="pink"
                >
                  PRO
                </Badge>
              </Text>
            </Stack>
            <Box>
              <Highlight
                query={["Pro", "Pro Business"]}
                styles={{
                  display: "inline-flex",
                  lineHeight: "30px",
                  px: "1",
                  color: "pink",
                }}
              >
                With a Pro or Pro Business account, you can disable ads across
                the site.
              </Highlight>
              <br />
              <Button mt={"15px"} fontWeight={"500"} size={"md"} bg={"pink"}>
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel>
          <Flex>
            <Box
              w={{
                base: "100%",
                sm: "60%",
                md: "50%",
                lg: "10%",
              }}
            >
              <Avatar
                size={"xl"}
                cursor={"pointer"}
                float={"left"}
                src="https://bit.ly/sage-adebayo"
              />
            </Box>
            <Box flex={{ base: 1, md: 0 }} display={"flex"} letterSpacing={1}>
              <Button
                w={{ md: "90px" }}
                float={"left"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"base"}
                alignItems={"center"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "white",
                  color: "pink.400",
                  borderColor: "#dcdcdc",
                  border: "1px",
                }}
              >
                <Center>Like</Center>
              </Button>
              <Button
                float={"left"}
                mx={{ md: "10px" }}
                w={"70px"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                letterSpacing={"2px"}
                // href={'#'}
                color={"black"}
                bg={"#dcdcdc"}
                _hover={{
                  bg: "#c0c0c0",
                  borderColor: "#d3d3d3",
                }}
              >
                <Center>Save</Center>
              </Button>
            </Box>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
