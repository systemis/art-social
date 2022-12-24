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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Divider,
} from "@chakra-ui/react";
import { AppCol, AppRow, BasicRoute } from "components/elements";
import { AppAvatar } from "components/elements/AppAvatar";
import { AppLink } from "components/elements/AppLink";
import { MobileNavigation } from "components/layouts/MobileNavigation";
import { QUERY_LG_DESKTOP, QUERY_MOBILE } from "constants/app";
import React, { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineMenuAlt3, HiSearch } from "react-icons/hi";
import { MdEdit, MdOutlineClose, MdPerson } from "react-icons/md";
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
  isShowIcon = false,
  cb: any = undefined
): any => {
  if (item.routes) {
    if (item.label) {
      return renderParentMenuItem(item, item.path, isMobile, isShowIcon, cb);
    }

    return item.routes.map((route) => {
      return renderMenuItems(route, parentPath, isMobile, isShowIcon, cb);
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
        isShowIcon={isShowIcon}
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
  isShowIcon = false,
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
  isShowIcon = false,
  cb = undefined,
}: {
  item: BasicRoute;
  parentPath: string;
  isMobile: boolean;
  isShowIcon: boolean;
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
            <Flex>
              {isShowIcon ? (
                <Icon as={item.icon} boxSize={8} alignItems="center" mx={6} />
              ) : undefined}
              {item.label}
            </Flex>
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
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isSignedIn = true;

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
      bg={!isAtTop || isShowSideBar ? "white" : "transparent"}
      zIndex={999}
      sx={{ transition: "all .3s ease-in" }}
      borderBottom={!isAtTop || isShowSideBar ? "2px" : "0"}
      borderStyle="solid"
      borderColor="rgb(227, 227, 227)"
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
                color={
                  isHomePage && isAtTop && !isShowSideBar ? "white" : "black"
                }
              >
                Imaginary.
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
                backgroundColor="rgba(255, 255, 255, 0.7)"
                border="2px"
                borderColor={
                  isShowSideBar || !isAtTop
                    ? "rgb(138, 147, 155)"
                    : "rgba(255, 255, 255, 0.3)"
                }
                _hover={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
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
            <Icon
              as={HiSearch}
              fontWeight="bold"
              color={
                isHomePage && isAtTop && !isShowSideBar ? "white" : "black"
              }
              boxSize={8}
            />
          )}
          {!isLargeDesktop && <MobileNavigation />}
          {isLargeDesktop && (
            <AppRow
              alignItems="center"
              justifyContent="flex-end"
              color={isHomePage && isAtTop ? "white" : "black"}
            >
              {routes.map((item) => {
                return renderMenuItems(item);
              })}
              {isSignedIn ? (
                <Popover>
                  <PopoverTrigger>
                    <Button>
                      <AppAvatar
                        w="40px"
                        h="40px"
                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="17vw"
                    color="black"
                    border="transparent"
                    boxShadow={
                      isHomePage && isAtTop
                        ? "none !important"
                        : "0px 0px 30px 1px #e7e7e9"
                    }
                  >
                    <PopoverArrow />
                    <PopoverBody>
                      <AppCol p={6} color="#707070">
                        <AppRow alignItems="center" mb={3} cursor="pointer">
                          <Icon as={MdPerson} mr={2} />
                          <Text>Profile</Text>
                        </AppRow>
                        <Divider />
                        <AppRow alignItems="center" my={3} cursor="pointer">
                          <Icon as={MdEdit} mr={2} />
                          <Text>Edit Profile</Text>
                        </AppRow>
                        <Divider />
                        <AppRow alignItems="center" mt={3} cursor="pointer">
                          <Icon as={IoMdSettings} mr={2} />
                          <Text>Account Setting</Text>
                        </AppRow>

                        <Text cursor="pointer" mt={7}>Sign out</Text>
                      </AppCol>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ) : (
                <>
                  <Button
                    backgroundColor="#ea4c89"
                    fontWeight="semibold"
                    fontSize="sm"
                    px="13px"
                    ml="1.5em"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </AppRow>
          )}
          {!isLargeDesktop && (
            <Icon
              as={!isShowSideBar ? HiOutlineMenuAlt3 : MdOutlineClose}
              boxSize={"2.3rem"}
              onClick={() => dispatch(showMobileMenu({ value: true }))}
              _hover={{ cursor: "pointer" }}
              color={
                isHomePage && isAtTop && !isShowSideBar ? "white" : "black"
              }
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
