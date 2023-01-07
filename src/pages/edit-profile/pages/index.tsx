import { Box } from "@chakra-ui/react";
import React from "react";
import { UserHeader } from "pages/edit-profile/components/UserHeader";
import { EditContent } from "pages/edit-profile/components/EditContent";
export const EditProfile = () => {
  return (
    <Box pt={"80px"} minH={"75vh"}>
      <UserHeader />
      <EditContent />
    </Box>
  );
};
