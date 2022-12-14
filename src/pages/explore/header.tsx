import React from 'react'
import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuButton,
  MenuOptionGroup,
  MenuDivider,
  Flex,
  Tabs,
  Select,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spacer
} from '@chakra-ui/react';
import { MenuButton as Button } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'

export const Header = () => {
  return (
    <>
      <Box>
        <Flex p={' 30px 20px 30px'} justify={'space-around'}>
          <Box float={'left'} display={{ base: 'none', md: 'none', lg: 'flex' }}>
            <Menu>
              <MenuButton as={Button}
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
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
          <Tabs size={'md'} variant='soft-rounded' colorScheme='gray' overflowX={{ base: "scroll", lg: "hidden" }}>
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
          <Box float={'left'} display={{ base: 'none', lg: 'flex', }}>
            <Menu>
              <MenuButton as={Button}
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
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
  )
}
