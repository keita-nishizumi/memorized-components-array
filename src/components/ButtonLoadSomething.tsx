import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useLoadSomething } from "../hooks/useLoadSomething";

export const ButtonLoadSomething = () => {
  const { isLoading, loadSomething } = useLoadSomething();
  useEffect(() => {
    loadSomething();
  }, []);
  return (
    <Button colorScheme="teal" size="md" onClick={loadSomething}>
      {isLoading ? "loading... " : "done !"}
    </Button>
  );
};
