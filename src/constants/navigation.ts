import { IconType } from "react-icons";
import {
  FaDiscord,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

interface navigationIcon {
  label?: string;
  icon?: IconType;
}

export const navigationIcons: navigationIcon[] = [
  {
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    label: "Discord",
    icon: FaDiscord,
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    label: "Youtube",
    icon: FaYoutube,
  },
];
