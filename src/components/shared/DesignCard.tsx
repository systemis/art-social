import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import {PAGES, QUERY_MOBILE} from "constants/app";
import React, { useRef } from "react";
import { AiFillHeart, AiFillFolderAdd } from "react-icons/ai";
import {useHistory} from "react-router-dom";

interface OwnerProps {
  name: string;
  picture: string;
  username: string;
}

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  gallery: string[];
  tags: string[];
  owner: OwnerProps;
}

interface Product {
  listProduct: ProductProps;
}

const DesignCard = ({ listProduct }: Product) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const toast = useToast();
  const history = useHistory();
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  return (
    <Box
      width={{
        base: "100%",
        sm: "250px",
        md: "250px",
        lg: "300px",
      }}
      m={{
        base: "0 10px 55px",
        md: "0 20px 70px",
      }}
      onClick={() => history.push(`${PAGES.PRODUCT_DETAIL}/${listProduct._id}`)}
      cursor="pointer"
    >
      <Center flexDirection="column">
        <Box position="relative" data-group>
          <Image
            src={listProduct?.gallery[0]}
            alt=""
            height="220px"
            objectFit="cover"
            borderRadius="0.5em"
            transition="all 0.3s ease"
          />
        {isDesktop && (<Box
          position="absolute"
          w="100%"
          bottom="0"
          borderBottomRadius="0.5em"
          transition="all 0.3s ease"
          _groupHover={{
            background:
              "linear-gradient(0deg, rgba(112,112,112,1) 0%, rgba(115,115,115,0) 100%, rgba(255,255,255,0) 50%)",
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
                {listProduct?.name}
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
        </Box>)}
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
            src={listProduct?.owner?.picture}
          />
          <Box pt={"3px"} float={"left"} ml="3">
            <Link _hover={{ textDecoration: "none" }} fontSize="sm" fontWeight="bold">
              {listProduct?.name}
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DesignCard;
