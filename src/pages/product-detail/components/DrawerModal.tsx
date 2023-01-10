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
import { FeedbackItem } from "./FeedbackItem";
import { FeedbackEntity } from "entity/feedback.entity";
import { getProductFeedback, sendProductFeedback } from "redux/apps/product";

export const DrawerModal: React.FC<{
  isOpen: boolean;
  productId: string;
  onClose(): void;
  onOpen(): void;
  setOpenShare(): void;
}> = (props) => {
  //Click like button after show content successfuly
  const toast = useToast();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [feedback, setFeedback] = React.useState<FeedbackEntity[]>([]);
  const [message, setMessage] = React.useState("");

  /**
   * @todo Handle get feedback
   */
  const handleGetFeedback = async () => {
    try {
      const feedback = await getProductFeedback(props.productId);
      setFeedback(feedback);
    } catch { }
  }

  /**
   * @todo Submit feedback
   */
  const handleSubmitFeedback = React.useCallback(async () => {
    if (!message) return;
    try {
      await sendProductFeedback({
        message,
        productId: props.productId
      });
      setMessage("");
      handleGetFeedback();
    } catch { }
  }, [message]);

  React.useEffect(() => {
    handleGetFeedback();
  }, []);


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
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmitFeedback();
          }}>
            <Input placeholder='Type here...' value={message} onChange={(e) => setMessage(e.target.value)} />
          </form>
          {feedback.map((item, index) => <FeedbackItem key={`fed-${index}`} data={item} />)}
        </DrawerBody>
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme='pink' onClick={(e) => {
            e.preventDefault();
            handleSubmitFeedback();
          }}>Send</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer >
  )
}
