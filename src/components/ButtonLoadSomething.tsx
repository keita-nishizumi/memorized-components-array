import React, { useEffect } from "react";
import { Button, CircularProgress } from "@chakra-ui/react";
import { useLoadSomething } from "../hooks/useLoadSomething";

export type ButtonLoadSomethingProps = {
  text: string;
  idx: number;
};
export const ButtonLoadSomething = ({
  text,
  idx,
}: ButtonLoadSomethingProps) => {
  const { isLoading, loadSomething } = useLoadSomething();
  useEffect(() => {
    loadSomething();
  }, []);
  useEffect(() => {
    console.log("再描画中...", idx);
  });
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
