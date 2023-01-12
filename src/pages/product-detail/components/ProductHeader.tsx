import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsSuitHeartFill } from "react-icons/bs";
import { ProductEntity } from "entity/product.entity";
import { AppDispatch } from "redux/root-store";
import { useDispatch, useSelector } from "react-redux";
import { reactToProduct } from "redux/products/thunk";
import { RootState } from "redux/root-reducer";

export const ProductHeader: React.FC<{ product: ProductEntity, reCall(): void }> = ({ product, reCall }) => {
  const toast = useToast();
  const dispatch: AppDispatch = useDispatch();
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;
  const [isLoading, setLoading] = React.useState(false);
  
  
  const handleReactProduct = async () => {
    setLoading(true);
    await dispatch(reactToProduct(product._id));
    toast({
      title: "Congratulation.",
      description: "You Liked Successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "bottom-right",
    });
    
    await reCall();
    setLoading(false);
  };
  
  return (
    <Box
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
      }}
      pt={{ base: "30px" }}
    >
      <Flex justify={"center"}>
        <Box
          w={{
            base: "100%",
            sm: "60%",
            md: "50%",
            lg: "45%",
          }}
          ml={{
            base: "10px",
            sm: "45px",
            md: "0",
            lg: "0",
          }}
        >
          <Avatar
            cursor={"pointer"}
            float={"left"}
            src={product?.owner?.picture}
          />
          <Box float={"left"} ml="3" lineHeight={"2"}>
            <Text fontWeight="bold">{product?.owner?.name}</Text>
            <Text cursor={"pointer"} fontSize="sm">
              <Link>{product?.owner?.username}</Link>
            </Text>
          </Box>
        </Box>
        <Box flex={{ base: 1, md: 0 }} display={"flex"} letterSpacing={1}>
          <Button
            float={"left"}
            mx={{ md: "10px" }}
            w={"70px"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            letterSpacing={"2px"}
            // href={'#'}
            color={"black"}
            bg={"#dcdcdc"}
            _hover={{
              bg: "#c0c0c0",
              borderColor: "#d3d3d3",
            }}
          >
            <Center>Save</Center>
          </Button>

          <Button
            w={{ md: "90px" }}
            float={"left"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"base"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            leftIcon={<BsSuitHeartFill />}
            // href={'#'}
            _hover={{
              bg: "white",
              color: "pink.400",
              borderColor: "#dcdcdc",
              border: "1px",
            }}
            onClick={handleReactProduct}
            disabled={isLoading}
            isLoading={isLoading}
          >
            <Center>{product?.reactions?.includes(currentUser?.sub) ? "Liked" : "Like"}</Center>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
