import React from 'react';
import {
    Box,
    Avatar,
    Button,
    Flex,
    Text,
    useBreakpointValue,
    IconButton,
    Divider,
    Stack,
    Heading,
    Link,
    Container,
    Center,
    Icon,
    Textarea,
    useToast,
    keyframes,
    useDisclosure,
} from "@chakra-ui/react";

import { BsSuitHeartFill } from 'react-icons/bs';

// import yarn add @types/react-slick
import Slider from 'react-slick';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

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

//set size avatar 

const size = '96px';
const color = 'teal';

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

//const { isToggle, setToggle } = useDisclosure();

export const productDetail = () => {

    const toast = useToast();

    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Design Projects 1',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-23-at-9.03.09-PM.png',
        },
        {
            title: 'Design Projects 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/k71r66uwuefpivemgxsz/iron-man-armor?fimg-ssr-default',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2022/9/25/avatar1664076788709-16640767888443261054.jpg',
        },
    ];

    return (
        <Box
            mt={"30px"}
            bg={'#d3d3d3'}
            borderTopLeftRadius={'20px'}>
            <Box
                w={{
                    base: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%'
                }}
                pt={{ base: '30px' }}>
                <Flex justify={"center"}>
                    <Box
                        w={{
                            base: "100%",
                            sm: '60%',
                            md: '50%'
                        }}
                        ml={{
                            sm: '45px',
                            md: '0',
                            lg: '0'
                        }} >
                        <Avatar
                            cursor={'pointer'}
                            float={"left"}
                            src='https://bit.ly/sage-adebayo' />
                        <Box
                            float={"left"}
                            ml='3'
                            lineHeight={"2"}>
                            <Text fontWeight='bold'>
                                Segun Adebayo
                            </Text>
                            <Text
                                cursor={'pointer'}
                                fontSize='sm'>
                                <Link>UI Engineer</Link>
                            </Text>
                        </Box>
                    </Box>
                    <Box flex={{ base: 1, md: 0 }}
                        flexDirection={'row'}
                        letterSpacing={1}>
                        <Flex>
                            <Button
                                mx={"20px"}
                                w={"70px"}
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'black'}
                                letterSpacing={"2px"}
                                bg={'#dcdcdc'}
                                // href={'#'}
                                _hover={{
                                    bg: 'white',
                                }}
                            ><Center>Save</Center>

                            </Button>

                            <Button
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'pink.400'}
                                leftIcon={<BsSuitHeartFill />}
                                // href={'#'}
                                _hover={{
                                    bg: 'white',
                                    color: 'pink.400'
                                }} onClick={() =>
                                    toast({
                                        title: 'Congratulation.',
                                        description: "You Liked Successfully.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                        position: 'bottom-right',
                                    })
                                }>
                                <Center>Like</Center>
                            </Button>
                        </Flex>
                    </Box>
                </Flex >
            </Box >

            <Box
                position={'relative'}
                height={{ base: '800px' }}
                width={{ base: '100%', sm: 'full', md: '60%' }}
                mt={{ base: '50px', sm: '20px', md: '20px' }}
                mx={{ base: 'auto' }}
                overflow={'hidden'}>

                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    //charSet="UTF-8" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />

                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    variant="ghost"
                    position="absolute"
                    left={{ base: side, sm: side, md: side, lg: side }}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}
                    color={'#696969'}
                    _hover={{
                        bg: '#696969',
                        color: 'black'
                    }}>
                    <BiLeftArrowAlt size="40px" />
                </IconButton>

                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}
                    color={'#696969'}
                    _hover={{
                        bg: '#696969',
                        color: 'black'
                    }}>
                    <BiRightArrowAlt size="40px" />
                </IconButton>

                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((card, index) => (
                        <Box
                            key={index}
                            height={'3xl'}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            borderRadius={"30px"}
                            backgroundImage={`url(${card.image})`}>

                            {/* This is the block you need to change, to customize the caption */}
                            <Container size="container.lg" height="600px" position="relative">
                                <Stack
                                    spacing={6}
                                    w={'full'}
                                    maxW={'lg'}
                                    position="absolute"
                                    top="50%"
                                    transform="translate(0, -50%)">
                                    {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                        {card.title}
                                    </Heading>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                        {card.text}
                                    </Text> */}
                                </Stack>
                            </Container>
                        </Box>
                    ))}
                </Slider>
            </Box>

            <Center mb={{ base: '5px', md: '6px', lg: '50px' }}>
                <Text
                    width={{ base: '90%', md: '60%', lg: '58%' }}
                    fontSize={{ sm: '20px', md: '20px', lg: '17px' }} letterSpacing={'1px'}>
                    Marvel’s Avengers begins at A-Day where Captain America, Iron Man, Hulk, Black Widow, and Thor are unveiling a hi-tech Avengers Headquarters in San Francisco — including the reveal of their own helicarrier powered by an experimental energy source.

                    The celebration turns deadly when a catastrophic accident results in massive devastation. Blamed for the tragedy, the Avengers disband.

                    Five years later, with all Super Heroes outlawed and the world in peril, New Jersey teenager Kamala Khan uncovers a shocking conspiracy and the only hope is to reassemble the Avengers in time to stop Advanced Idea Mechanics, one of the greatest threats Earth has ever faced..</Text>
            </Center>

            <Divider w={'50%'} ></Divider>
            <Flex
                justifyContent="center"
                alignItems="center"
                h="216px"
                w="full"
                overflow="hidden">
                {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
                <Box
                    as="div"
                    position="relative"
                    w={size}
                    h={size}
                    _before={{
                        content: "''",
                        position: 'relative',
                        display: 'block',
                        width: '300%',
                        height: '300%',
                        boxSizing: 'border-box',
                        marginLeft: '-100%',
                        marginTop: '-100%',
                        borderRadius: '50%',
                        bgColor: color,
                        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                    }}>
                    <Avatar
                        src="https://i.pravatar.cc/300"
                        size="full"
                        position="absolute"
                        top={0}
                    />
                </Box>
            </Flex>

        </Box >

    )
}
