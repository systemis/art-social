import { Link, LinkProps } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props extends LinkProps {
  actionName?: string;
}

export const isStringOrNumber = (value: any) => {
  const typeOfChildren = typeof value;
  if (typeOfChildren === "string" || typeOfChildren === "number") {
    return true;
  }
  return false;
};

export const AppLink = memo(
  React.forwardRef<HTMLAnchorElement, any>(
    ({ actionName = "", children, ...rest }: Props, ref) => {
      return <Link {...rest}>{children}</Link>;
    }
  )
);
