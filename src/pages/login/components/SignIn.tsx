import React, {useState} from "react";
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
} from "@chakra-ui/react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {RegisterDto} from "dto";
import {SingInBackground} from "assets/images";
import "pages/login/style/loginpage.scss";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterDto>();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  return (
    <Stack
      minH={{base: "95vh", md: "100vh"}}
      direction={{base: "column", md: "row"}}
    >
      <Flex flex={{lg: "0.8"}}>
        <Image
          display={{base: "none", lg: "flex"}}
          w={{lg: "100%"}}
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
        lineHeight={{lg: "30px"}}
        justify={"center"}
      >
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={{base: "2xl", md: "3xl"}} pb={"10px"}>
            Sign in to Imaginary
          </Heading>
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
                  _focus={{bg: "white", borderColor: "pink.200"}}
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
                    _focus={{bg: "white", borderColor: "pink.200"}}
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
              <Button
                loadingText="Submitting"
                color={"white"}
                borderRadius={"10px"}
                bg={"#ff4584"}
                fontWeight={"500"}
                _hover={{bg: "#f53677"}}
                letterSpacing={"1px"}
                paddingX={"20px"}
                width={"200px"}
              >
                Sign In
              </Button>
              <Stack pt={6}>
                <Text align={"left"}>
                  Not a member? <Link color={"#4f3cc9"} onClick={() => history.push("/signup")}>Sign up now</Link>
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
