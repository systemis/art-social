import React from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Box,
  HStack,
  FormLabel,
  Heading,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Text,
  Center,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // <Flex
    //   minH={"100vh"}
    //   align={"center"}
    //   justify={"center"}
    //   bg={useColorModeValue("gray.50", "gray.800")}
    // >
    //   <Box bg={"red"}></Box>
    //   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
    //     <Stack align={"center"}>
    //       <Heading fontSize={"4xl"} textAlign={"center"}>
    //         Sign up to Dribble
    //       </Heading>
    //       <Button w={"70%"} colorScheme={"messenger"} leftIcon={<FcGoogle />}>
    //         <Center>
    //           <Text>Sign In with Google</Text>
    //         </Center>
    //       </Button>
    //     </Stack>
    //     <Box rounded={"lg"} p={8}>
    //       <Stack spacing={4}>
    //         <HStack>
    //           <Box>
    //             <FormControl id="firstName">
    //               <FormLabel>First Name</FormLabel>
    //               <Input type="text" />
    //             </FormControl>
    //           </Box>
    //           <Box>
    //             <FormControl id="lastName">
    //               <FormLabel>Last Name</FormLabel>
    //               <Input type="text" />
    //             </FormControl>
    //           </Box>
    //         </HStack>
    //         <FormControl id="email">
    //           <FormLabel>Email address</FormLabel>
    //           <Input type="email" />
    //         </FormControl>
    //         <FormControl id="password">
    //           <FormLabel>Password</FormLabel>
    //           <InputGroup>
    //             <Input type={showPassword ? "text" : "password"} />
    //             <InputRightElement h={"full"}>
    //               <Button
    //                 variant={"ghost"}
    //                 onClick={() =>
    //                   setShowPassword((showPassword) => !showPassword)
    //                 }
    //               >
    //                 {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
    //               </Button>
    //             </InputRightElement>
    //           </InputGroup>
    //         </FormControl>
    //         <Stack spacing={10} pt={2}>
    //           <Button
    //             loadingText="Submitting"
    //             size="lg"
    //             bg={"blue.400"}
    //             color={"white"}
    //             _hover={{
    //               bg: "blue.500",
    //             }}
    //           >
    //             Sign up
    //           </Button>
    //         </Stack>
    //         <Stack pt={6}>
    //           <Text align={"center"}>
    //             Already a user? <Link color={"blue.400"}>Login</Link>
    //           </Text>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>

    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign up t o Dribble</Heading>
          <Button w={"70%"} colorScheme={"messenger"} leftIcon={<FcGoogle />}>
            <Center>
              <Text>Sign In with Google</Text>
            </Center>
          </Button>
          <Box rounded={"lg"} pt={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
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
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default login;
