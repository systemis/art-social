import { Image, ImageProps } from "@chakra-ui/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

export interface AppImageProps extends ImageProps {
  url: string;
  inline?: boolean;
  onClose?: (arg0: any) => any;
  containerClasses?: string;
}

const AppImage = ({
  url,
  containerClasses,
  onClose,
  inline,
  objectFit = "contain",
  ...rest
}: AppImageProps) => {
  const [imageSrc, setImageSrc] = useState(url || "placeholder");

  useEffect(() => {
    setImageSrc(url || "placeholder");
  }, [url]);

  return (
    <div className={classNames(containerClasses, { inline })}>
      <Image
        src={imageSrc}
        objectFit={objectFit}
        onError={() => setImageSrc("placeholder")}
        className={classNames({ inline })}
      />
    </div>
  );
};

export default AppImage;
