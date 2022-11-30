import {
  Box,
  Container,
  Grid,
  GridItem,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { AppRow, BasicRoute } from "components/elements";
import { QUERY_MOBILE } from "constants/app";
import React, { useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
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
        <Link _hover={{ color: "brand.900" }}>{item.label}</Link>
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
        <Link as={Link} _hover={{ color: "brand.700" }}>
          {item.label}
        </Link>
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
          <Link
            onClick={() => cb && cb()}
            as={Link}
            to={fullPath}
            fontSize="xl"
            color="black"
            _focus={{ boxShadow: "none" }}
            _hover={{ color: isActive ? undefined : "orange" }}
            borderBottom={isActive ? "1px" : 0}
            borderBottomColor="orange"
            zIndex={2}
          >
            {item.label}
          </Link>
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
        <Link
          as={Link}
          _focus={{ boxShadow: "none" }}
          to={fullPath}
          _hover={{ color: isActive ? undefined : "orange" }}
          borderBottom={isActive ? "1px" : 0}
          borderBottomColor="orange"
          zIndex={2}
        >
          {item.label}
        </Link>
      </AppRow>
    </Box>
  );
};

const Navigation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const colorText = useColorModeValue("black", "brand.900");

  useEffect(() => {
    window.onscroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
  }, []);

  return (
    <Box
      ref={ref}
      pos="fixed"
      right={0}
      left={0}
      top={0}
      bg={!isAtTop ? "white" : "transparent"}
      color={isAtTop ? "red" : "black"}
      zIndex={999}
      sx={{ transition: "all .3s ease-in" }}
      borderBottom={!isAtTop ? "2px" : "0"}
      borderStyle="solid"
      borderColor="#f1eee4"
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns="repeat(16, 1fr)"
          py={3}
          gap={6}
          alignItems="center"
        >
          <GridItem colSpan={{ base: 12, lg: 2 }}>
            <AppRow align="flex-end">
              {!isDesktop && (
                <Icon
                  as={GiHamburgerMenu}
                  boxSize={"2.3rem"}
                  // onClick={() => {}}
                  _hover={{ cursor: "pointer" }}
                />
              )}
              <Link as={Link} to="/">
                <Text
                  _hover={{ cursor: "pointer" }}
                  fontWeight="bold"
                  color={!isAtTop ? "orange.900" : colorText}
                  fontSize="lg"
                  w="100%"
                  display="inline-block"
                >
                  | Design Marketplace
                </Text>
              </Link>
            </AppRow>
          </GridItem>
          {/* {!isDesktop && <MobileNavigation />} */}
          {isDesktop && (
            <GridItem colStart={4} colEnd={-1}>
              <AppRow alignItems="center" justifyContent="flex-end">
                {routes.map((item) => {
                  return renderMenuItems(item);
                })}
              </AppRow>
            </GridItem>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Navigation;
