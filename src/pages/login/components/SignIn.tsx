import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import BgSignIn from "assets/images/signin.jpg";
import "pages/login/style/loginpage.scss";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Stack
      minH={{ base: "95vh", md: "100vh" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={{ lg: "0.8" }}>
        <Image
          display={{ base: "none", lg: "flex" }}
          w={{ lg: "100%" }}
          alt={"Login Image"}
          objectFit={"cover"}
          objectPosition={"0"}
          src={BgSignIn}
        />
      </Flex>
      <Flex
        p={8}
        flex={1}
        align={"center"}
        lineHeight={{ lg: "30px" }}
        justify={"center"}
      >
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} pb={"10px"}>
            Sign in to Imaginary
          </Heading>
          <Button
            w={"90%"}
            h={{ base: "35px", md: "40px" }}
            borderRadius={"10px"}
            bg={"#ff4584"}
            fontWeight={"500"}
            letterSpacing={"1px"}
            _hover={{ bg: "#f53677" }}
            leftIcon={<FcGoogle />}
          >
            <Center>
              <Text>Sign In with Google</Text>
            </Center>
          </Button>
          <Box className="line-border" mt={"5px"}>
            Or
          </Box>
          <Box rounded={"lg"} pt={5}>
            <Stack spacing={4} lineHeight={"20px"}>
              <FormControl id="email">
                <FormLabel color={"#607d8b"}>Email address</FormLabel>
                <Input
                  borderRadius={"20px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="email"
                  bg={"gray.200"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={"#607d8b"}>Password</FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={"20px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    placeholder="6+ characters"
                    type={showPassword ? "text" : "password"}
                    bg={"gray.200"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  h={{ base: "40px", md: "45px" }}
                  color={"white"}
                  borderRadius={"10px"}
                  bg={"#ff4584"}
                  fontWeight={"500"}
                  _hover={{ bg: "#f53677" }}
                  letterSpacing={"1px"}
                >
                  Sign In
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Not a member? <Link color={"#4f3cc9"}>Sign up now</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SignIn;
