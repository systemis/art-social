import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { CardSlider } from "pages/product-detail/components/CardSlider";
import { DrawerModal } from "pages/product-detail/components/DrawerModal";
import { DrawerModalShare } from "pages/product-detail/components/DrawerModalShare";
import { ListProduct } from "pages/product-detail/components/ListProduct";
import { ProductHeader } from "pages/product-detail/components/ProductHeader";
import { RightSideButton } from "pages/product-detail/components/RightSideButton";

const ProductDetail = () => {
  const [isOpenShare, setOpenShare] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt="80px" bg={"white"} borderTopLeftRadius={"20px"}>
      <ProductHeader />
      <CardSlider />
      <RightSideButton
        setOpenShare={() => setOpenShare(true)}
        openChatModal={() => onOpen()}
      />
      <DrawerModal
        isOpen={isOpen}
        onClose={() => onClose()}
        onOpen={() => onOpen()}
        setOpenShare={() => {
          setOpenShare(true);
        }}
      />
      <DrawerModalShare
        isOpen={isOpenShare}
        onClose={() => {
          setOpenShare(false);
        }}
      />
      <ListProduct />
    </Box>
  );
};

export default ProductDetail;
