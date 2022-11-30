import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface Props extends FlexProps {}
export const AppCol = (props: Props) => <Flex direction="column" {...props} />