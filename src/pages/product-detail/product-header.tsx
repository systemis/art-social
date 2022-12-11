import React from 'react'
import {
    Box,
    Avatar,
    Button,
    Flex,
    Text,
    Link,
    Center,
    useToast,
} from "@chakra-ui/react";

import { BsSuitHeartFill } from 'react-icons/bs';
import './Style/listProduct.scss';

export const ProductHeader = () => {
    const toast = useToast();

    return (
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
                        base: '10px',
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
                    display={'flex'}
                    letterSpacing={1}>

                    <Button
                        float={'left'}
                        mx={"20px"}
                        w={"70px"}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        letterSpacing={"2px"}
                        // href={'#'}
                        color={'black'}
                        bg={'#dcdcdc'}
                        _hover={{
                            bg: '#c0c0c0',
                            borderColor: '#d3d3d3',

                        }}
                    ><Center>Save</Center>

                    </Button>

                    <Button
                        float={'left'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        leftIcon={<BsSuitHeartFill />}
                        // href={'#'}
                        _hover={{
                            bg: 'white',
                            color: 'pink.400',
                            borderColor: '#dcdcdc',
                            border: '1px'
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
                </Box>
            </Flex >
        </Box >
    )
}
