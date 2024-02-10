import React, { useEffect } from "react";
import { Button, CircularProgress } from "@chakra-ui/react";
import { useLoadSomething } from "../hooks/useLoadSomething";

export const ButtonLoadSomething = () => {
  const { isLoading, loadSomething } = useLoadSomething();
  useEffect(() => {
    loadSomething();
  }, []);
  return (
    <Button colorScheme="teal" size="md" onClick={loadSomething}>
      {isLoading ? (
        <CircularProgress isIndeterminate color="green.300" />
      ) : (
        "done !"
      )}
    </Button>
  );
};
