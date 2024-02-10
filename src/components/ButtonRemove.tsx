import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
type ButtonRemoveProps = {
  handleOnClick: () => void;
};
export const ButtonRemove = ({ handleOnClick }: ButtonRemoveProps) => {
  return (
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme="red"
      aria-label="Done"
      fontSize="20px"
      icon={<CloseIcon />}
      onClick={handleOnClick}
    />
  );
};
