import React from "react";
import { SimpleGrid, StackDivider, VStack } from "@chakra-ui/react";

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <SimpleGrid spacing={2}>{children}</SimpleGrid>
    </VStack>
  );
};
