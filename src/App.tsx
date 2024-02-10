import React from "react";
import "./App.css";
import { PageLayout } from "./components/PageLayout";
import { ButtonLoadSomething } from "./components/ButtonLoadSomething";

const buttons = [...Array(3)].map((_, idx) => {
  return <ButtonLoadSomething key={idx} />;
});

function App() {
  return (
    <div className="App">
      <PageLayout>{buttons}</PageLayout>
    </div>
  );
}

export default App;
