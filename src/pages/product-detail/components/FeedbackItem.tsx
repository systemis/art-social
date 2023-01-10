import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { FeedbackEntity } from "entity/feedback.entity";
import { useHistory } from "react-router-dom";

export const FeedbackItem: React.FC<{ data: FeedbackEntity }> = (props) => {
  const history = useHistory();

  return (
    <Box
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
      }}
      pt={{ base: "30px" }}
    >
      <Flex justify={"center"}>
        <Box
          w={{
            base: "100%",
          }}
          ml={{
            base: "10px",
          }}
        >
          <Avatar
            cursor={"pointer"}
            float={"left"}
            src={props.data?.owner?.picture}
            rounded={"50%"}
            width={"50px"}
            height={"50px"}
          />
          <Box float={"left"} ml="3" lineHeight={"2"}>
            <Link onClick={() => history.push(`/profile/${props.data.owner.sub}`)} fontWeight="bold">{props.data?.owner?.name}</Link>
            <Text cursor={"pointer"} fontSize="sm">
              <Text>{props.data.message}</Text>
            </Text>
            <Text cursor={"pointer"} fontSize="sm">
              <Link>{props.data.updated_at}</Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}