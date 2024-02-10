import { useState } from "react";

export const useLoadSomething = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadSomething = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return { isLoading, loadSomething };
};
