import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CardSlider } from "pages/product-detail/components/CardSlider";
import { DrawerModal } from "pages/product-detail/components/DrawerModal";
import { DrawerModalShare } from "pages/product-detail/components/DrawerModalShare";
import { ListProduct } from "pages/product-detail/components/ListProduct";
import { ProductHeader } from "pages/product-detail/components/ProductHeader";
import { RightSideButton } from "pages/product-detail/components/RightSideButton";
import { useParams } from "react-router-dom";
import { networkProvider } from "providers/network.provider";
import { ProductEntity } from "entity/product.entity";

interface ProductPrams {
  id: string;
}

const ProductDetail = () => {
  const [isOpenShare, setOpenShare] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = React.useState<ProductEntity>();
  const [loading, setLoading] = React.useState(false);
  const params = useParams<ProductPrams>();
  const { id } = params;

  const fetchData = async () => {
    setLoading(true);
    const response = await networkProvider.request<ProductEntity>(
      `/product/details/${id}`,
      {
        method: "GET",
      }
    );
    setProduct(response);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);

    fetchData()
  }, []);

  return (
    <Box pt="80px" bg={"white"} borderTopLeftRadius={"20px"}>
      <ProductHeader product={product} reCall={fetchData} />
      <CardSlider product={product} />
      <RightSideButton
        setOpenShare={() => setOpenShare(true)}
        openChatModal={() => onOpen()}
      />
      <DrawerModal
        productId={id}
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
