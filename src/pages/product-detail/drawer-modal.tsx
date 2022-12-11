import React, { useRef } from 'react';
import {
    Box,
    Button,
    Flex,
    Center,
    useToast,
    DrawerFooter,
    Input,
    DrawerBody,
    DrawerHeader,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Drawer,
} from "@chakra-ui/react";

import { RiShareForwardFill } from 'react-icons/ri';
import { AiFillFolderAdd } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { RiInformationFill } from 'react-icons/ri';

export const DrawerModal = (props: any) => {
    //Click like button after show content successfuly
    const toast = useToast();
    const btnRef = useRef<HTMLButtonElement>(null);
    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Flex>
                        <Box
                            flex={{ base: 1, md: 0 }}
                            flexDirection={'row'}
                            letterSpacing={1}>
                            <Flex>
                                <Flex>
                                    <Button
                                        m={'10px'}
                                        w={"20px"}
                                        display={{ base: 'none', md: 'inline-flex' }}
                                        fontSize={'sm'}
                                        fontWeight={600}
                                        letterSpacing={"2px"}
                                        onClick={() => props.setOpenShare()}
                                        color={'black'}
                                        border={'1px'}
                                        borderColor={'#dcdcdc'}>
                                        <Center>
                                            <RiShareForwardFill size={"25px"} />
                                        </Center>
                                    </Button>

                                    <Button
                                        m={'10px'}
                                        w={"20px"}
                                        display={{ base: 'none', md: 'inline-flex' }}
                                        fontSize={'sm'}
                                        fontWeight={600}
                                        letterSpacing={"2px"}
                                        // href={'#'}
                                        color={'black'}
                                        border={'1px'}
                                        borderColor={'#dcdcdc'}>
                                        <Center>
                                            <AiFillFolderAdd size={"25px"} />
                                        </Center>
                                    </Button>

                                    <Button
                                        m={'10px'}
                                        w={"20px"}
                                        display={{ base: 'none', md: 'inline-flex' }}
                                        fontSize={'sm'}
                                        fontWeight={600}
                                        letterSpacing={"2px"}
                                        // href={'#'}
                                        color={'black'}
                                        border={'1px'}
                                        borderColor={'#dcdcdc'}
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
                                        <Center>
                                            <AiFillHeart size={"25px"} />
                                        </Center>
                                    </Button>
                                    <Button justifyContent={'space-evenly'}
                                        display={{ base: 'none', md: 'inline-flex' }}
                                        fontSize={'sm'}
                                        letterSpacing={'1px'}
                                        m={'10px'}
                                        fontWeight={600}
                                        color={'black'}
                                        leftIcon={<RiInformationFill size={'25px'} />}
                                        border={'1px'}
                                        borderColor={'#dcdcdc'}
                                    >
                                        <Center>Details</Center>
                                    </Button>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>

                </DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='pink'>Send</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )
}
