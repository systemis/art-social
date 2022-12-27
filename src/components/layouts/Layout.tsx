import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "components/layouts/Navigation";
import { Footer } from "components/layouts/footer";
import { useLocation } from "react-router";
import { PAGES } from "constants/app";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== PAGES.SIGNIN &&
        location.pathname !== PAGES.SIGNUP && <Navigation />}
      <Box>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
