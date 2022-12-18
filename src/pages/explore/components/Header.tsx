import {
  Box,
  Flex,
  Menu,
  MenuButton as Button,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import React from "react";

export const Header = () => {
  return (
    <>
      <Box
        pt="80px"
        background="linear-gradient(180deg, rgba(227,197,236,1) 0%, rgba(214,198,224,1) 52%, rgba(255,255,255,1) 100%)"
      >
        <Flex p={" 30px 20px 30px"} justify={"space-around"}>
          <Box
            float={"left"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <Menu>
              <MenuButton
                as={Button}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                rightIcon={<BiChevronDown />}
              >
                Following
              </MenuButton>
              <MenuList>
                <MenuItem>Popular</MenuItem>
                <MenuItem>New & Noteworthy</MenuItem>
                <MenuDivider />
                <MenuItem>Marketplace</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Tabs
            size={"md"}
            variant="soft-rounded"
            colorScheme="gray"
            overflowX={{ base: "scroll", lg: "hidden" }}
          >
            <TabList>
              <Tab>Discover</Tab>
              <Tab>Animation</Tab>
              <Tab>Branding</Tab>
              <Tab>Illustration</Tab>
              <Tab>Product Design</Tab>
              <Tab>Typography</Tab>
              <Tab>Web Design</Tab>
            </TabList>
          </Tabs>
          <Box float={"left"} display={{ base: "none", lg: "flex" }}>
            <Menu>
              <MenuButton
                as={Button}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                rightIcon={<BiChevronDown />}
              >
                Following
              </MenuButton>
              <MenuList>
                <MenuItem>Popular</MenuItem>
                <MenuItem>New & Noteworthy</MenuItem>
                <MenuDivider />
                <MenuItem>Marketplace</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
