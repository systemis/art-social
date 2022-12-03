import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { AppRow, BasicRoute } from "components/elements";
import { AppLink } from "components/elements/AppLink";
import { MobileNavigation } from "components/layouts/MobileNavigation";
import { QUERY_LG_DESKTOP, QUERY_MOBILE } from "constants/app";
import React, { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt3, HiSearch } from "react-icons/hi";
import { MdOutlineAccountCircle, MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { showMobileMenu } from "redux/ui/slice";
import { routes } from "routes";

export const renderMenuItems = (
  item: BasicRoute,
  parentPath = "",
  isMobile = false,
  cb: any = undefined
): any => {
  if (item.routes) {
    if (item.label) {
      return renderParentMenuItem(item, item.path, isMobile, cb);
    }

    return item.routes.map((route) => {
      return renderMenuItems(route, parentPath, isMobile, cb);
    });
  }
  if (item.label) {
    const fullPath =
      parentPath && parentPath !== "/"
        ? `${parentPath}${item.path}`
        : item.path;
    return (
      <SingleMenuItem
        key={fullPath}
        item={item}
        parentPath={parentPath}
        isMobile={isMobile}
        cb={cb}
      />
    );
  }
  return null;
};

const renderParentMenuItem = (
  item: BasicRoute,
  parentPath = "",
  isMobile = false,
  cb: any = undefined
) => {
  return (
    <Box key={`parent-menu-${item.path}`} _hover={{ cursor: "pointer" }}>
      <AppRow px={5} alignItems="flex-end">
        <AppLink _hover={{ color: "brand.900" }}>{item.label}</AppLink>
      </AppRow>
    </Box>
  );
};

const SingleMenuItem = ({
  item,
  parentPath = "",
  isMobile = false,
  cb = undefined,
}: {
  item: BasicRoute;
  parentPath: string;
  isMobile: boolean;
  cb: any;
}) => {
  const { pathname } = useLocation();

  const fullPath =
    parentPath && parentPath !== "/" ? `${parentPath}${item.path}` : item.path;
  const isActive = pathname.includes(fullPath);

  if (fullPath !== item.path) {
    return (
      <Box
        key={`menu-${fullPath}`}
        fontWeight="bold"
        my={2}
        _hover={{ cursor: "pointer" }}
      >
        {/* Link ?? */}
        <AppLink as={Link} _hover={{ color: "brand.700" }}>
          {item.label}
        </AppLink>
      </Box>
    );
  }

  if (isMobile) {
    return (
      <Box
        key={`menu-${fullPath}`}
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
      >
        <AppRow alignItems="flex-end" my={5}>
          <AppLink
            onClick={() => cb && cb()}
            as={Link}
            to={fullPath}
            fontSize="xl"
            color="black"
            _focus={{ boxShadow: "none" }}
            _hover={{ color: isActive ? undefined : "brand.700" }}
            zIndex={2}
          >
            {item.label}
          </AppLink>
        </AppRow>
        {/*<UiDivider borderColor="orange.400" />*/}
      </Box>
    );
  }

  return (
    <Box
      key={`menu-${fullPath}`}
      fontWeight="bold"
      _hover={{ cursor: "pointer" }}
    >
      <AppRow px={5} alignItems="flex-end">
        <AppLink
          as={Link}
          _focus={{ boxShadow: "none" }}
          to={fullPath}
          _hover={{ color: isActive ? undefined : "brand.700" }}
          zIndex={2}
          fontSize="md"
          color="black"
          letterSpacing="1px"
        >
          {item.label}
        </AppLink>
      </AppRow>
    </Box>
  );
};

const Navigation = () => {
  const inputRef = useRef<any>(null);
  const dispatch: AppDispatch = useDispatch();
  const isShowSideBar =
    useSelector((state: RootState) => state.ui.menu.isShowMobileMenu) || false;
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const [isLargeDesktop] = useMediaQuery(`(min-width: ${QUERY_LG_DESKTOP})`, {
    ssr: false,
  });
  const colorText = useColorModeValue("black", "brand.900");

  useEffect(() => {
    document.addEventListener("keydown", handleSearchKey, true);
  }, []);

  const handleSearchKey = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      e.stopPropagation();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
  }, []);

  return (
    <Box
      pos="fixed"
      right={0}
      left={0}
      top={0}
      bg={!isAtTop ? "white" : "transparent"}
      zIndex={999}
      sx={{ transition: "all .3s ease-in" }}
      borderBottom={!isAtTop ? "2px" : "0"}
      borderStyle="solid"
      borderColor="#f1eee4"
    >
      <Container maxW="container" px="3rem">
        <Flex py={4} gap={6} alignItems="center">
          <AppRow align="flex-end" flex={!isDesktop ? "1" : undefined}>
            <AppLink as={Link} to="/">
              <Text
                as="b"
                _hover={{ cursor: "pointer" }}
                fontWeight="bold"
                fontSize="xl"
                w="100%"
              >
                Marketplace
              </Text>
            </AppLink>
          </AppRow>
          {isDesktop ? (
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon
                  as={AiOutlineSearch}
                  color={"rgb(138, 147, 155)"}
                  boxSize={6}
                />
              </InputLeftElement>
              <Input
                ref={inputRef}
                placeholder="Search everything you want"
                size="lg"
                borderRadius="xl"
                fontSize="base"
                boxShadow="none !important"
                border="2px"
                _focus={{ borderColor: "rgb(138, 147, 155)" }}
              />
              <InputRightElement>
                <Flex
                  h="2rem"
                  w="2rem"
                  bg={"rgb(227, 227, 227)"}
                  borderRadius={8}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    alignItems="center"
                    justifyContent="center"
                    fontSize="md"
                  >
                    /
                  </Text>
                </Flex>
              </InputRightElement>
            </InputGroup>
          ) : (
            <Icon as={HiSearch} fontWeight="bold" boxSize={8} />
          )}
          {!isLargeDesktop && <MobileNavigation />}
          {isLargeDesktop && (
            <AppRow alignItems="center" justifyContent="flex-end">
              {routes.map((item) => {
                return renderMenuItems(item);
              })}
              <Button>
                <Icon
                  as={MdOutlineAccountCircle}
                  color={"rgb(38, 36, 36)"}
                  boxSize={"2rem"}
                />
              </Button>
            </AppRow>
          )}
          {!isLargeDesktop && (
            <Icon
              as={!isShowSideBar ? HiOutlineMenuAlt3 : MdOutlineClose}
              boxSize={"2.3rem"}
              onClick={() => dispatch(showMobileMenu({ value: true }))}
              _hover={{ cursor: "pointer" }}
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
