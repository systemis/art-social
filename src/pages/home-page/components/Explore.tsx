import { Box, Container } from "@chakra-ui/react";
import { AppTitle } from "components/elements/AppTitle";
import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselCard } from "pages/home-page/components/carouselCard/CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/css/main.css";

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
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Slider>
    </Box>
  );
};

const Explore = () => {
  return (
    <Box
      textAlign="center"
      background="linear-gradient(180deg, rgba(227,197,236,1) 0%, rgba(214,198,224,1) 52%, rgba(255,255,255,1) 100%)"
      pt="80px"
    >
      <Container maxW="container" px="3rem">
        <AppTitle fontSize="8xl" my={10}>
          Explore our designs
        </AppTitle>
        <DesignCarouse />
      </Container>
    </Box>
  );
};

export default Explore;
