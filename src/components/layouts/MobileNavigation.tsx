import { Drawer, DrawerContent, DrawerHeader, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { showMobileMenu } from "redux/ui/slice";

export const MobileNavigation = memo(() => {
  const isShow =
    useSelector((state: RootState) => state.ui.menu.isShowMobileMenu) || false;
  const dispatch: AppDispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(showMobileMenu({ value: false }));
  };

  return (
    <Drawer placement="right" isOpen={isShow} onClose={closeDrawer} size="full">
      <DrawerContent
        minH="calc(100vh - 80px)"
        mt="80px"
        borderTop="2px"
        borderStyle="solid"
        borderColor="#f1eee4"
      >
        <DrawerHeader>
          <Text
            as="b"
            _hover={{ cursor: "pointer" }}
            fontWeight="bold"
            fontSize="xl"
            w="100%"
          >
            Mobile Navigation
          </Text>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
});
