import {
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  useMediaQuery,
  Text,
  Icon,
  Image,
  Badge,
} from "@chakra-ui/react";
import { AppCol, AppRow } from "components/elements";
import { AppTitle } from "components/elements/AppTitle";
import { PAGES, QUERY_LG_DESKTOP, QUERY_MOBILE } from "constants/app";
import { tabData, trending } from "constants/homepage";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import React from "react";
import { itemColorSchemes } from "constants/color-scheme";
import { useHistory } from "react-router-dom";

interface TabProps {
  id: number;
  label: string;
}

const RenderTabs = (data: TabProps[]) => {
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  return (
    <Tabs px={isDesktop ? "3rem" : 0} pt="20px">
      <TabList>
        {data.map((tab) => (
          <Tab key={tab.id}>
            <AppTitle fontSize="xl">{tab.label}</AppTitle>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box>{TrendingTable()}</Box>
        </TabPanel>
        <TabPanel>
          <Box>{TrendingTable()}</Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const TrendingTable = () => {
  const [isLargeDesktop] = useMediaQuery(`(min-width: ${QUERY_LG_DESKTOP})`, {
    ssr: false,
  });

  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const history = useHistory();

  return (
    <AppRow justifyContent="space-between">
      <Table variant="unstyle" w={isLargeDesktop ? "48%" : "100%"}>
        <Thead>
          <Tr>
            <Th>
              <Text fontFamily="Poppins" fontSize="13px">
                Collection
              </Text>
            </Th>
            {isDesktop && (
              <>
                <Th isNumeric px="20px">
                  <Icon as={AiFillHeart} boxSize={5} />
                </Th>
                <Th isNumeric px="20px">
                  <Icon as={AiFillEye} boxSize={5} />
                </Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody fontWeight="bold">
          {trending.slice(0, 5).map((item) => (
            <Tr
              key={item.id}
              _hover={{ backgroundColor: "#f1f1f1" }}
              cursor="pointer"
              onClick={() => history.push(`${PAGES.PRODUCT_DETAIL}`)}
            >
              <Td>
                <AppRow alignItems="center">
                  <AppCol>{item.id}</AppCol>
                  <Image
                    src={item.image}
                    w="65px"
                    h="65px"
                    mx={4}
                    borderRadius={5}
                  />
                  <AppCol>
                    <AppRow fontSize="19px">{item.name}</AppRow>
                    <AppRow fontWeight="400" fontStyle="italic" fontSize="14px">
                      {item.author}
                    </AppRow>
                  </AppCol>
                </AppRow>
              </Td>
              {isDesktop && (
                <>
                  <Td isNumeric p="0">
                    <Badge
                      colorScheme={itemColorSchemes.liked}
                      px={3}
                      py={2}
                      fontSize="15px"
                      borderRadius={6}
                    >
                      {item.liked}
                    </Badge>
                  </Td>
                  <Td isNumeric p="0">
                    <Badge
                      colorScheme={itemColorSchemes.watched}
                      px={3}
                      py={2}
                      fontSize="15px"
                      borderRadius={6}
                    >
                      {item.watched}
                    </Badge>
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isLargeDesktop && (
        <Table variant="unstyle" w="48%">
          <Thead>
            <Tr>
              <Th fontFamily="Poppins" fontSize="13px" fontWeight="bold">
                Collection
              </Th>
              <Th isNumeric px="20px">
                <Icon as={AiFillHeart} boxSize={5} />
              </Th>
              <Th isNumeric px="20px">
                <Icon as={AiFillEye} boxSize={5} />
              </Th>
            </Tr>
          </Thead>
          <Tbody fontWeight="bold">
            {trending.slice(5, 10).map((item) => (
              <Tr
                key={item.id}
                _hover={{ backgroundColor: "#f1f1f1" }}
                cursor="pointer"
                onClick={() => history.push(`${PAGES.PRODUCT_DETAIL}`)}
              >
                <Td>
                  <AppRow alignItems="center">
                    <AppCol>{item.id}</AppCol>
                    <Image
                      src={item.image}
                      w="65px"
                      h="65px"
                      mx={4}
                      borderRadius={5}
                    />
                    <AppCol>
                      <AppRow fontSize="19px">{item.name}</AppRow>
                      <AppRow
                        fontWeight="400"
                        fontStyle="italic"
                        fontSize="14px"
                      >
                        {item.author}
                      </AppRow>
                    </AppCol>
                  </AppRow>
                </Td>
                <Td isNumeric p="0">
                  <Badge
                    colorScheme={itemColorSchemes.liked}
                    px={3}
                    py={2}
                    fontSize="15px"
                    borderRadius={6}
                  >
                    {item.liked}
                  </Badge>
                </Td>
                <Td isNumeric p="0">
                  <Badge
                    colorScheme={itemColorSchemes.watched}
                    px={3}
                    py={2}
                    fontSize="15px"
                    borderRadius={6}
                  >
                    {item.watched}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </AppRow>
  );
};

const Trending = () => {
  return (
    <Box>
      {RenderTabs(tabData)}
    </Box>
  );
};

export default Trending;
