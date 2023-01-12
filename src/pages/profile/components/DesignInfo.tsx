import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react";
import { QUERY_MOBILE } from "constants/app";
import React, { memo, useEffect } from "react";
import DesignTab from "pages/profile/components/tabs/DesignTab";
import CollectionTab from "pages/profile/components/tabs/CollectionTab";
import LikedTab from "pages/profile/components/tabs/LikedTab";
import AboutTab from "pages/profile/components/tabs/AboutTab";
import { AppDispatch } from "redux/root-store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { fetchProductsByUser, fetchLikedProductsByUser } from "redux/products/thunk";
import { fetchProjectsByUser } from "redux/projects/thunk";

interface ProfileTabProps extends TabProps {}

const ProfileTab = memo(function ProfileTab({ ...rest }: ProfileTabProps) {
  return (
    <Tab
      _selected={{ color: "black" }}
      color="#6e6d7a"
      fontSize="16px"
      fontWeight="700"
      {...rest}
    />
  );
});

const DesignInfo = () => {
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;
  const [products, setProducts] = React.useState<any>();
  const [likedProducts, setLikedProducts] = React.useState<any>();
  const [projects, setProjects] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const dispatch: AppDispatch = useDispatch();
  const userId = currentUser?.sub;

  const fetchData = async () => {
    setLoading(true);
    const productResponse = await dispatch(fetchProductsByUser(userId));
    const likedProductResponse = await dispatch(fetchLikedProductsByUser(userId));
    const projectResponse = await dispatch(fetchProjectsByUser(userId));
    setProducts(productResponse.payload);
    setProjects(projectResponse.payload);
    setLikedProducts(likedProductResponse.payload);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box pt="90px" px={isDesktop ? "3rem" : 0}>
      <Tabs>
        <TabList>
          <ProfileTab>Designs</ProfileTab>
          <ProfileTab>Projects</ProfileTab>
          <ProfileTab>Liked Designs</ProfileTab>
          <ProfileTab>About</ProfileTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DesignTab products={products} loading={loading} />
          </TabPanel>
          <TabPanel>
            <CollectionTab projects={projects} loading={loading} />
          </TabPanel>
          <TabPanel>
            <LikedTab products={likedProducts} loading={loading} />
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
