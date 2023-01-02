import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Icon,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { showMobileMenu } from "redux/ui/slice";
import { routes } from "routes";
import { renderMenuItems } from "components/layouts/Navigation";
import { PAGES, QUERY_MOBILE } from "constants/app";
import { navigationIcons } from "constants/navigation";
import { AppCol, AppRow } from "components/elements";
import { useHistory } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export const MobileNavigation = memo(() => {
  const isShow =
    useSelector((state: RootState) => state.ui.menu.isShowMobileMenu) || false;
  const dispatch: AppDispatch = useDispatch();
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const history = useHistory();
  const closeDrawer = () => {
    dispatch(showMobileMenu({ value: false }));
  };

  return (
    <Drawer
      placement="right"
      isOpen={isShow}
      onClose={closeDrawer}
      size={isDesktop ? "sm" : "full"}
    >
      <DrawerContent
        minH="calc(100vh - 80px)"
        mt="80px"
        borderTop={isDesktop ? "2px" : "0"}
        borderStyle="solid"
        borderColor="rgb(227, 227, 227)"
      >
        <DrawerBody mt={7}>
          {routes.map((item) => {
            return renderMenuItems(item, "", true, true, closeDrawer);
          })}
          <Divider />
          <Box>
            <Text
              fontSize="xl"
              color="#ea4c89"
              fontWeight="900"
              my={6}
              ml="25px"
              onClick={() => {
                history.push(`${PAGES.CREATE_PRODUCT}`);
                closeDrawer();
              }}
              cursor="pointer"
            >
              UPLOAD
            </Text>
          </Box>
          <Divider />
          <AppCol fontSize="lg" ml="25px">
            <AppRow
              alignItems="center"
              mt={10}
              cursor="pointer"
              onClick={() => {
                history.push(`${PAGES.PROFILE}`);
                closeDrawer();
              }}
            >
              <Icon as={MdPerson} mr={2} boxSize={6} />
              <Text>Profile</Text>
            </AppRow>
            <AppRow
              alignItems="center"
              mt={3}
              cursor="pointer"
              onClick={() => {
                history.push(`${PAGES.EDIT_ACCOUNT}`);
                closeDrawer();
              }}
            >
              <Icon as={IoMdSettings} mr={2} boxSize={6} />
              <Text>Account Setting</Text>
            </AppRow>

            <Text cursor="pointer" mt={7} as="b">
              Sign out
            </Text>
          </AppCol>
        </DrawerBody>
        <DrawerFooter
          borderTop={isDesktop ? "2px" : "0"}
          borderStyle="solid"
          borderColor="rgb(227, 227, 227)"
          alignItems="center"
          justifyContent="center"
        >
          {navigationIcons.map((item) => (
            <Icon
              key={item.label}
              as={item.icon}
              boxSize={7}
              mx={3}
              color="rgb(138, 147, 155)"
            />
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});
