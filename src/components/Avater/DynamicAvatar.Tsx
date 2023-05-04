import React from "react";
import { Avatar } from "@chakra-ui/react";

type DynamicAvatarProps = {
  name: string;
  bgColor: string;
  textColor: string;
  size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const DynamicAvatar: React.FC<DynamicAvatarProps> = ({
  name,
  bgColor,
  textColor,
  size,
}) => {
  return (
    <Avatar
      name={name.toUpperCase()}
      bg={bgColor}
      color={textColor}
      size={size}
    />
  );
};

export default DynamicAvatar;
