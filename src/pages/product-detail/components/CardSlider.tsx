import {
  Avatar,
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
} from "@chakra-ui/react";
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
const size = "96px";
const color = "teal";
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
  const cards = [
    {
      image:
        "https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-23-at-9.03.09-PM.png",
    },
    {
      image:
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/k71r66uwuefpivemgxsz/iron-man-armor?fimg-ssr-default",
    },
    {
      image:
        "https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2022/9/25/avatar1664076788709-16640767888443261054.jpg",
    },
  ];

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
          {cards.map((card, index) => (
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

      <Divider
        w={"50%"}
        mx={{ base: "auto", sm: "auto", lg: "auto" }}
        borderColor={"black"}
        border={"1px"}
        borderRadius={"1px"}
      />
      {/* Author/User */}
      <Flex
        justifyContent="center"
        alignItems="center"
        h="216px"
        w="full"
        overflow="hidden"
      >
        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
        <Box
          as="div"
          position="relative"
          w={size}
          h={size}
          _before={{
            content: "''",
            position: "relative",
            display: "block",
            width: "300%",
            height: "300%",
            boxSizing: "border-box",
            marginLeft: "-100%",
            marginTop: "-100%",
            borderRadius: "50%",
            bgColor: color,
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        >
          <Avatar
            cursor={"pointer"}
            src="https://i.pravatar.cc/300"
            size="full"
            position="absolute"
            top={0}
          />
        </Box>
      </Flex>
    </>
  );
};
