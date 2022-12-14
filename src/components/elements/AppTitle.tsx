import { Text, TextProps } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props extends TextProps {}

export const AppTitle = memo(function AppTitle({...rest}: Props) {
    return <Text fontWeight="900" {...rest} />
})