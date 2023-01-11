import { Text } from "@chakra-ui/react";
import { AppCol, AppRow } from "components/elements";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { formatDate } from "utils/date-time";

const AboutTab = () => {
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;

  return (
    <AppRow mb="17vh">
      <AppCol flex={3}>
        <Text fontSize="lg" fontWeight="bold" mt={5}>
          Username
        </Text>
        <Text fontSize="sm" color="#ea4c89" mt={3}>
          {currentUser?.name}
        </Text>
        <Text fontSize="lg" fontWeight="bold" mt={5}>
          Email
        </Text>
        <Text fontSize="sm" color="#ea4c89" mt={3}>
          {currentUser?.email}
        </Text>
      </AppCol>
      <AppCol mt={5} flex="2" justifyContent="flex-end">
        Member since{" "}
        <Text as="span" color="#ea4c89" width="fit-content">
          {formatDate(currentUser.created_at)}
        </Text>
      </AppCol>
    </AppRow>
  );
};

export default AboutTab;
