import React from "react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type DynamicIconButtonProps = {
  text: string;
  colorScheme: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  fontSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  border: string;
  borderColor: string;
  textColor: string;
};

const DynamicIconButton: React.FC<DynamicIconButtonProps> = ({
  text,
  colorScheme,
  size,
  fontSize,
  border,
  borderColor,
  textColor,
}) => {
  return (
    <Button
      color={textColor}
      border={border}
      borderColor={borderColor}
      size={size}
      colorScheme={colorScheme}
      leftIcon={<ChevronDownIcon />}
      rightIcon={<ChevronDownIcon />}
      fontSize={fontSize}
    >
      {text}
    </Button>
  );
};

export default DynamicIconButton;
