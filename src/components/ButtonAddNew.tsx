import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
type ButtonAddNewProps = {
  handleOnClick: () => void;
};
export const ButtonAddNew = ({ handleOnClick }: ButtonAddNewProps) => {
  return (
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme="teal"
      aria-label="Done"
      fontSize="20px"
      icon={<AddIcon />}
      onClick={handleOnClick}
    />
  );
};
