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
import React, { useRef } from "react";
import { AiFillHeart, AiFillFolderAdd } from "react-icons/ai";

interface ProductProps {
  title: string;
  text: string;
  image: string;
}

interface Product {
  listProduct: ProductProps;
}

const DesignCard = ({ listProduct }: Product) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const toast = useToast();
  return (
    <Box
      width={{
        base: "100%",
        sm: "40%",
        md: "25%",
        lg: "20%",
      }}
      m={{
        base: "0 10px 55px",
        md: "0 20px 70px",
      }}
    >
      <Center flexDirection="column">
        <Box position="relative" data-group>
          <Image
            src={listProduct.image}
            alt=""
            height="220px"
            objectFit="cover"
            borderRadius="0.5em"
            transition="all 0.3s ease"
          />
          <Box
            position="absolute"
            w="100%"
            bottom="0"
            borderBottomRadius="0.5em"
            transition="all 0.3s ease"
            _groupHover={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(115,115,115,0) 100%, rgba(255,255,255,0) 100%)",
            }}
            h="20%"
          >
            <Flex
              justifyContent="space-between"
              transition="all 0.2s ease"
              opacity="0"
              _groupHover={{ opacity: "1" }}
              px={4}
              alignItems="center"
            >
              <Box float={"left"}>
                <Text fontSize={"16px"} fontWeight="900" color={"white"}>
                  {listProduct.title}
                </Text>
              </Box>

              <Flex gap={2}>
                <Button
                  size="sm"
                  ref={btnRef}
                  color={"black"}
                  bg={"#dcdcdc"}
                  _hover={{
                    bg: "#c0c0c0",
                  }}
                >
                  <Center>
                    <AiFillFolderAdd size={"18px"} />
                  </Center>
                </Button>

                <Button
                  size="sm"
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
                    <AiFillHeart size={"18px"} />
                  </Center>
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Center>

      <Box>
        <Flex
          alignItems="center"
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
          pt={{ base: "10px" }}
        >
          <Avatar
            size={"xs"}
            cursor={"pointer"}
            float={"left"}
            src="https://bit.ly/sage-adebayo"
          />
          <Box pt={"3px"} float={"left"} ml="3">
            <Link _hover={{ textDecoration: "none" }} fontSize="sm" fontWeight="bold">
              {listProduct.title}
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DesignCard;
