import React from "react";
import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Imaginary from "assets/images/imaginary.png";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={5}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={5}>
            <Box>
              <Image h={"60px"} src={Imaginary} />
            </Box>
            <Text fontSize={"15px"}>
              Imaginary is the go-to resource for discovering and connecting
              with designers and creative talent around the glode.
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Designers</ListHeader>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Explore design work
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Design blog
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Contact
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Pricing
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              About
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Blog
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Contact
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Pricing
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Help Center
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Terms of Service
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Legal
            </Link>
            <Link
              _hover={{ cursor: "pointer", color: "#4f3cc9" }}
              href={"#"}
              fontSize={"md"}
            >
              Private Policy
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"FaceBook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Pinterest"} href={"#"}>
                <FaPinterest />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
