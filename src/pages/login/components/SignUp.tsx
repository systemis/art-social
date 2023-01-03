import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { RegisterDto } from "dto";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/root-store";
import { registerUser as onRegister } from "redux/apps/auth";
import { SignUpBackground } from "assets/images";
import "pages/login/style/loginpage.scss";

const SignUp: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { formState, onSubmit, register, errors } = useForm<RegisterDto>({
    identityClass: RegisterDto,
  });

  /**
   * @dev The function to handle registation.
   * @param {RegisterDto} dto.
   */
  const handleRegister = async (registerDto: RegisterDto) => {
    try {
      setLoading(true);
      await dispatch(onRegister(registerDto));
      setLoading(false);
      history.push("/signin");
    } catch {}
  };

  return (
    <Stack
      minH={{ base: "105vh", md: "75vh" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={{ lg: "0.8" }}>
        <Image
          display={{ base: "none", lg: "flex" }}
          w={{ lg: "100%" }}
          alt={"Login Image"}
          objectFit={"cover"}
          src={SignUpBackground}
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
          <Heading fontSize={"3xl"} pb={"10px"}>
            Sign up to Imaginary
          </Heading>
          <Box rounded={"lg"} pt={5}>
            <Stack spacing={4} lineHeight={"20px"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem w="100%">
                  <Box>
                    <FormControl id="firstName">
                      <FormLabel color={"#607d8b"}>First Name</FormLabel>
                      <Input
                        borderRadius={"20px"}
                        fontWeight={"500"}
                        fontSize={"sm"}
                        type="text"
                        bg={"gray.200"}
                        _focus={{ bg: "white", borderColor: "pink.200" }}
                        onChange={(e) => register("given_name", e.target.value)}
                        value={formState?.given_name}
                      />
                      {errors?.given_name && (
                        <Text color="red.300" fontSize={10}>
                          {errors.given_name}
                        </Text>
                      )}
                    </FormControl>
                  </Box>
                </GridItem>
                <GridItem w="100%">
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel color={"#607d8b"}>Last Name</FormLabel>
                      <Input
                        borderRadius={"20px"}
                        fontWeight={"500"}
                        fontSize={"sm"}
                        type="text"
                        bg={"gray.200"}
                        _focus={{ bg: "white", borderColor: "pink.200" }}
                        onChange={(e) =>
                          register("family_name", e.target.value)
                        }
                        value={formState?.family_name}
                      />
                      {errors?.family_name && (
                        <Text color="red.300" fontSize={10}>
                          {errors.family_name}
                        </Text>
                      )}
                    </FormControl>
                  </Box>
                </GridItem>
              </Grid>
              <FormControl id="fullname">
                <FormLabel color={"#607d8b"}>Full Name</FormLabel>
                <Input
                  borderRadius={"20px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="email"
                  bg={"gray.200"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  onChange={(e) => register("name", e.target.value)}
                  value={formState?.name}
                />
                {errors?.name && (
                  <Text color="red.300" fontSize={10}>
                    {errors.name}
                  </Text>
                )}
              </FormControl>
              <FormControl id="email">
                <FormLabel color={"#607d8b"}>Email address</FormLabel>
                <Input
                  borderRadius={"20px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="email"
                  bg={"gray.200"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  onChange={(e) => register("email", e.target.value)}
                  value={formState?.email}
                />
                {errors?.email && (
                  <Text color="red.300" fontSize={10}>
                    {errors.email}
                  </Text>
                )}
              </FormControl>
              <FormControl id="username">
                <FormLabel color={"#607d8b"}>Username</FormLabel>
                <Input
                  borderRadius={"20px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="email"
                  bg={"gray.200"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  onChange={(e) => register("username", e.target.value)}
                  value={formState?.username}
                />
                {errors?.username && (
                  <Text color="red.300" fontSize={10}>
                    {errors.username}
                  </Text>
                )}
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
                    onChange={(e) => register("password", e.target.value)}
                    value={formState?.password}
                  />
                  {errors?.password && (
                    <Text color="red.300" fontSize={10}>
                      {errors.password}
                    </Text>
                  )}
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
              <Button
                loadingText="Submitting"
                color={"white"}
                borderRadius={"10px"}
                bg={"#ff4584"}
                fontWeight={"500"}
                _hover={{ bg: "#f53677" }}
                letterSpacing={"1px"}
                paddingX={"20px"}
                width={"200px"}
                isLoading={loading}
                disabled={loading}
                onClick={() => onSubmit(handleRegister)}
              >
                Create Account
              </Button>
              <Stack pt={6}>
                <Text align={"left"}>
                  Already a member?{" "}
                  <Link
                    color={"#4f3cc9"}
                    onClick={() => history.push("/signin")}
                  >
                    Sign In
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SignUp;
