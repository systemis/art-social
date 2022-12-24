import { Box, Tab, TabList, TabPanel, TabPanels, TabProps, Tabs, useMediaQuery } from "@chakra-ui/react";
import {QUERY_MOBILE} from "constants/app";
import React, {memo} from "react";
import DesignTab from "pages/profile/components/tabs/DesignTab";
import CollectionTab from "pages/profile/components/tabs/CollectionTab";
import LikedTab from "pages/profile/components/tabs/LikedTab";
import AboutTab from "pages/profile/components/tabs/AboutTab";

interface ProfileTabProps extends TabProps{}

const ProfileTab = memo(function ProfileTab({...rest}: ProfileTabProps) {
  return <Tab _selected={{color: 'black'}} color='#6e6d7a' fontSize='16px' fontWeight="700" {...rest} />
})

const DesignInfo = () => {
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  return (
    <Box pt="90px" px={isDesktop ? "3rem" : 0}>
      <Tabs>
        <TabList>
          <ProfileTab>Designs</ProfileTab>
          <ProfileTab>Collections</ProfileTab>
          <ProfileTab>Liked Designs</ProfileTab>
          <ProfileTab>About</ProfileTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DesignTab />
          </TabPanel>
          <TabPanel>
            <CollectionTab />
          </TabPanel>
          <TabPanel>
            <LikedTab />
          </TabPanel>
          <TabPanel>
            <AboutTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DesignInfo;
