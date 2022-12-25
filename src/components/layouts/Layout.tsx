import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "components/layouts/Navigation";
import { Footer } from "./footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      <Box>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
