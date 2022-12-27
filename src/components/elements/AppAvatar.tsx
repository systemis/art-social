import React, {memo, useEffect, useState} from 'react';
import { placeholderImage } from 'assets/images';
import {Avatar, AvatarProps} from '@chakra-ui/react';

interface Props extends AvatarProps {
  name?: string;
  email?: string;
  url?: string;
  className?: string;
}

export const AppAvatar = memo(function AppAvatar({name, url, email, size = 'md', ...rest}: Props) {
  const [imageSrc, setImageSrc] = useState(url || placeholderImage);
  useEffect(() => {
    setImageSrc(url || placeholderImage);
  }, [url]);
  let initial = '';
  if (name) {
    const nameSplit = name.split(' ');
    initial = name.substring(0, 1);
    if (nameSplit.length >= 2) {
      initial += nameSplit[1].substring(0, 1);
    } else {
      initial = name.substring(0, 2);
    }
  } else if (email) {
    initial = email.substring(0, 2).toUpperCase();
  }

  return <Avatar src={imageSrc} onError={() => setImageSrc(placeholderImage)} alt={initial} size={size} {...rest} />;
});