import React from 'react';
import {
  Button,
  Stack,
  Center,
} from "@chakra-ui/react";
import {BsFillChatFill} from 'react-icons/bs';
import {RiShareForwardFill} from 'react-icons/ri';
import {AiFillFolderAdd} from 'react-icons/ai';

export const RightSideButton = (props: any) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Stack
      position='fixed'
      zIndex={'4'}
      top={{md: '200px', lg: '200px'}}
      direction={['column']}
      right={{md: '40px', lg: '60px'}}
      spacing='24px'
    >
      <Button
        w={'40px'}
        height={'40px'}
        ref={btnRef}
        onClick={() => props.openChatModal()}
        color={'black'}
        bg={'#dcdcdc'}
        _hover={{
          bg: '#c0c0c0',
        }}>
        <Center>
          <BsFillChatFill size={"20px"} />
        </Center>
      </Button>
      <Button
        w={'40px'}
        height={'40px'}
        ref={btnRef}
        onClick={() => {
          props.setOpenShare()
        }}
        // href={'#'}
        color={'black'}
        bg={'#dcdcdc'}
        _hover={{
          bg: '#c0c0c0',
        }}>
        <Center>
          <RiShareForwardFill size={"25px"} />
        </Center>
      </Button>
      <Button
        w={'40px'}
        height={'40px'}
        ref={btnRef}
        //onClick={onOpen}
        // href={'#'}
        color={'black'}
        bg={'#dcdcdc'}
        _hover={{
          bg: '#c0c0c0',
        }}>
        <Center>
          <AiFillFolderAdd size={"25px"} />
        </Center>
      </Button>
    </Stack>
  )
}
