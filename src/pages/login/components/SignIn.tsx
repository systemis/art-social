import React, { useState } from "react";
import {
  Box,
  Button,
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
  useToast,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { LoginDto } from "dto";
import { userLogin } from "redux/apps/auth";
import { SingInBackground } from "assets/images";
import "pages/login/style/loginpage.scss";

const SignIn: React.FC = () => {
  const toast = useToast();
  const { formState, register, onSubmit, errors } = useForm<LoginDto>({
    identityClass: LoginDto,
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  /**
   * @fetch The function to handle signing to API.
   * @param {LoginDto} loginDto
   */
  const handleLogin = async (loginDto: LoginDto) => {
    try {
      setLoading(true);
      await userLogin(loginDto);
      setLoading(false);
      history.push("/");
    } catch (err: any) {
      setLoading(false);
      toast({
        title: "Login failed",
        status: "error",
        description: err?.message?.toString(),
      });
    }
  };

  return (
    <Stack
      minH={{ base: "95vh", md: "75vh" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={{ lg: "0.8" }}>
        <Image
          display={{ base: "none", lg: "flex" }}
          w={{ lg: "100%" }}
          alt={"Login Image"}
          objectFit={"cover"}
          objectPosition={"0"}
          src={SingInBackground}
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
          <Box rounded={"lg"} pt={5}>
            <Stack spacing={4} lineHeight={"20px"}>
              <FormControl id="email">
                <FormLabel color={"#607d8b"}>Username</FormLabel>
                <Input
                  borderRadius={"20px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="email"
                  bg={"gray.200"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  onChange={(e) => register("username", e.target.value)}
                  value={formState?.username || ""}
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
                    value={formState?.password || ""}
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
                onClick={() => onSubmit(handleLogin)}
              >
                Sign In
              </Button>
              <Stack pt={6}>
                <Text align={"left"}>
                  Not a member?{" "}
                  <Link
                    color={"#4f3cc9"}
                    onClick={() => history.push("/signup")}
                  >
                    Sign up now
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

export default SignIn;
