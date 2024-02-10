import React, { useEffect } from "react";
import { Button, CircularProgress } from "@chakra-ui/react";
import { useLoadSomething } from "../hooks/useLoadSomething";

export const ButtonLoadSomething = ({
  text,
  idx,
}: {
  text: string;
  idx: number;
}) => {
  const { isLoading, loadSomething } = useLoadSomething();
  useEffect(() => {
    console.log(text, "loading something...");
    loadSomething();
  }, []);
  return (
    <Button colorScheme="teal" size="md" onClick={loadSomething}>
      {isLoading ? (
        <CircularProgress isIndeterminate color="green.300" />
      ) : (
        text
      )}
    </Button>
  );
};
