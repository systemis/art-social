import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "components/layouts/Navigation";
import { Footer } from "../../components/layouts/app-footer";
import { useLocation } from "react-router";
import { PAGES } from "constants/app";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();
  const isUploadPage = location.pathname === '/create/new' || location.pathname === '/create/new-project' ? true : false

  return (
    <div>
      {location.pathname !== PAGES.SIGNIN &&
        location.pathname !== PAGES.SIGNUP && <Navigation />}
      <Box minHeight={"80vh"}>{children}</Box>
      {!isUploadPage && <Footer />}
    </div>
  );
};

export default Layout;
