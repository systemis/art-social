import React from 'react';
import {
    Box,
    useDisclosure,
} from "@chakra-ui/react";
import { DrawerModalShare } from './drawer-modal-share';
import { DrawerModal } from './drawer-modal';
import { ProductHeader } from './product-header';
import { CardSlider } from './card-slider';
import { ListProduct } from './list-product';
import { RightSideButton } from './right-side-button';

export const productDetail = () => {
    const [isOpenShare, setOpenShare] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            mt={"30px"}
            bg={'white'}
            borderTopLeftRadius={'20px'}>
            <ProductHeader />
            <CardSlider />
            <RightSideButton setOpenShare={() => setOpenShare(true)} openChatModal={() => onOpen()} />
            <DrawerModal isOpen={isOpen} onClose={() => onClose()} onOpen={() => onOpen()} setOpenShare={() => { setOpenShare(true) }} />
            <DrawerModalShare isOpen={isOpenShare} onClose={() => {
                setOpenShare(false)
            }} />
            <ListProduct />
        </Box >
    )
}
