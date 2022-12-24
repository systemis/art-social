import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "components/layouts/Navigation";
import { useLocation } from "react-router";
import { PAGES } from "constants/app";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      {location.pathname !== PAGES.SIGNIN &&
        location.pathname !== PAGES.SIGNUP && <Navigation />}
      <Box>{children}</Box>
    </div>
  );
};

export default Layout;
