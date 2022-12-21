import { useRef } from "react";
import React from "react";
// import '../product-detail/style/list-product.scss'
// import { ListProduct } from '../product-detail/list-product';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import "pages/explore/style/explore-page.scss";
import "pages/product-detail/style/list-product.scss";
import { AiFillFolderAdd, AiFillHeart } from "react-icons/ai";

//Setting for slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slideToScroll: 1,
};
const listProducts = [
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-23-at-9.03.09-PM.png",
  },
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-23-at-9.03.09-PM.png",
  },
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-23-at-9.03.09-PM.png",
  },
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-23-at-9.03.09-PM.png",
  },
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/k71r66uwuefpivemgxsz/iron-man-armor?fimg-ssr-default",
  },
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2022/9/25/avatar1664076788709-16640767888443261054.jpg",
  },
];
const ExploreSection = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const toast = useToast();
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {listProducts.map((listProduct) => {
        return (
          <>
            <Box
              className="gallery__group"
              position={"relative"}
              width={{
                base: "100%",
                sm: "70%",
                md: "70%",
                lg: "25%",
              }}
              m={{
                base: "0 10px 55px",
                md: " 0 20px 70px",
              }}
            >
              <Image className="gallery__img" src={listProduct.image} alt="" />
              <Box className="gallery__icons">
                <Box display={"flow-root"} p={"0 20px"} pb={"5px"}>
                  <Box float={"left"} position={"relative"} top={"10px"}>
                    <Text fontSize={"20px"} color={"#c0c0c0"}>
                      {listProduct.title}
                    </Text>
                  </Box>

                  <Flex float={"right"} gap={"3"}>
                    <Button
                      w={"40px"}
                      height={"40px"}
                      ref={btnRef}
                      //onClick={onOpen}
                      // href={'#'}
                      color={"black"}
                      bg={"#dcdcdc"}
                      _hover={{
                        bg: "#c0c0c0",
                      }}
                    >
                      <Center>
                        <AiFillFolderAdd size={"25px"} />
                      </Center>
                    </Button>

                    <Button
                      w={"40px"}
                      height={"40px"}
                      ref={btnRef}
                      //onClick={onOpen}
                      // href={'#'}
                      color={"black"}
                      bg={"#dcdcdc"}
                      _hover={{
                        bg: "#c0c0c0",
                      }}
                      onClick={() =>
                        toast({
                          title: "Congratulation.",
                          description: "You Liked Successfully.",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                          position: "bottom-right",
                        })
                      }
                    >
                      <Center>
                        <AiFillHeart size={"25px"} />
                      </Center>
                    </Button>
                  </Flex>
                </Box>
              </Box>

              <Box>
                <Box
                  w={{
                    base: "100%",
                    sm: "60%",
                    md: "50%",
                    lg: "100%",
                  }}
                  pl={{
                    base: "10px",
                    sm: "15px",
                    md: "5px",
                    lg: "5px",
                  }}
                  pt={{ base: "5px" }}
                >
                  <Avatar
                    size={"sm"}
                    cursor={"pointer"}
                    float={"left"}
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Box pt={"3px"} float={"left"} ml="3">
                    <Link _hover={{ textDecoration: "none" }} fontWeight="bold">
                      Segun Adebayo
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default ExploreSection;
