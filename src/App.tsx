import React from "react";
import "./App.css";
import { SimpleGrid } from "@chakra-ui/react";
import { ComponentArray } from "./components/ComponentArray";

function App() {
  return (
    <div className="App">
      <SimpleGrid columns={2} spacing={2}>
        <ComponentArray title="メモ化しない場合" bg="tomato" memolize={false} />
        <ComponentArray title="メモ化した場合" bg="teal" memolize={true} />
      </SimpleGrid>
    </div>
  );
}

export default App;
