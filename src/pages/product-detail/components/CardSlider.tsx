import {
  Image,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  IconButton,
  keyframes,
  Stack,
  Text,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { AppCol, AppRow } from "components/elements";
import { AppTitle } from "components/elements/AppTitle";
import { CARDS } from "constants/product-detail";
import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

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
// Set size avatar
const size = "76px";
// Animation Avatar
const pulseRing = keyframes`
    0% {
        transform: scale(0.33);
    }
    40%, 50% {
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
`;

export const CardSlider = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <>
      <Box
        position={"relative"}
        height={{ base: "800px" }}
        width={{ base: "100%", sm: "full", md: "60%" }}
        mt={{ base: "50px", sm: "20px", md: "20px" }}
        mx={{ base: "auto" }}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={{ base: side, sm: side, md: side, lg: side }}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          color={"#696969"}
          _hover={{
            bg: "#696969",
            color: "black",
          }}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          color={"#696969"}
          _hover={{
            bg: "#696969",
            color: "black",
          }}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {CARDS.map((card, index) => (
            <Box
              key={index}
              height={"3xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius={"10px"}
              overflow={"hidden"}
              backgroundImage={`url(${card.image})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                ></Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <Center mb={{ base: "50px", md: "40px", lg: "50px" }}>
        <Text
          width={{ base: "90%", md: "60%", lg: "58%" }}
          fontSize={{ sm: "17px", md: "17px", lg: "17px" }}
          letterSpacing={"1px"}
        >
          Marvel’s Avengers begins at A-Day where Captain America, Iron Man,
          Hulk, Black Widow, and Thor are unveiling a hi-tech Avengers
          Headquarters in San Francisco — including the reveal of their own
          helicarrier powered by an experimental energy source. The celebration
          turns deadly when a catastrophic accident results in massive
          devastation. Blamed for the tragedy, the Avengers disband. Five years
          later, with all Super Heroes outlawed and the world in peril, New
          Jersey teenager Kamala Khan uncovers a shocking conspiracy and the
          only hope is to reassemble the Avengers in time to stop Advanced Idea
          Mechanics, one of the greatest threats Earth has ever faced..
        </Text>
      </Center>

      {/* Author/User */}
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        overflow="hidden"
      >
        <AppCol>
          <Box>
            <AppRow alignItems="center">
              <Box
                height="2px"
                width="25vw"
                background="#e0e0e0"
                display="block"
                color="white"
                mr={{ base: "2em", lg: "4em" }}
              />
              <Image
                cursor={"pointer"}
                src="https://i.pravatar.cc/300"
                borderRadius="50%"
                w={size}
              />
              <Box
                height="2px"
                width="25vw"
                background="#e0e0e0"
                display="block"
                color="white"
                ml={{ base: "2em", lg: "4em" }}
              />
            </AppRow>
          </Box>
          <Center flexDirection="column">
            <AppTitle fontSize="xl" mt="1em">
              Harry
            </AppTitle>
            <Text my=".5em">Web Developer</Text>
            <Button
              mt="1em"
              fontWeight="700"
              fontSize="13px"
              borderWidth={1}
              backgroundColor="#ea4c89"
              paddingY="0.3em"
              paddingX="1em"
            >
              Hire me
            </Button>
          </Center>
        </AppCol>
      </Flex>
    </>
  );
};
