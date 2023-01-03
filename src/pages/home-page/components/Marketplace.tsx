import { Box, Container, Text } from "@chakra-ui/react";
import { AppTitle } from "components/elements/AppTitle";
import Slider from "react-slick";
import { CarouselCard } from "pages/home-page/components/carouselCard/CarouselCard";
import React from "react";
import { PAGES } from "constants/app";
import { useHistory } from "react-router-dom";

const DesignCarouse = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box alignItems="center">
      <Slider {...settings}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Slider>
    </Box>
  );
};

const Marketplace = () => {
  const history = useHistory();
  return (
    <Box>
      <Container maxW="container" px="3rem">
        <AppTitle
          fontSize={{ base: "3xl", lg: "5xl" }}
          mt={10}
          textAlign="center"
        >
          Marketplace
        </AppTitle>
        <Text textAlign="center" pb="30px">
          9,250 inspirational designs, illustrations, and graphic elements from
          the world’s best designers. <br />
          Want more inspiration? Browse our{" "}
          <Text
            as="span"
            color="rgb(227,107,236)"
            cursor="pointer"
            onClick={() => history.push(`${PAGES.EXPLORE}`)}
          >
            marketplace...
          </Text>
        </Text>
        <DesignCarouse />
      </Container>
    </Box>
  );
};

export default Marketplace;
