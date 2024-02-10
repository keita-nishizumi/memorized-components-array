import React, { useState } from "react";
import "./App.css";
import { PageLayout } from "./components/PageLayout";
import { ButtonLoadSomething } from "./components/ButtonLoadSomething";
import { ButtonAddNew } from "./components/ButtonAddNew";
import { ButtonRemove } from "./components/ButtonRemove";

function App() {
  // const [buttons, setButtons] = useState<React.ReactElement[]>([]);
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const buttons = [...Array(count)].map((_, idx) => {
    return (
      <ButtonLoadSomething
        key={idx}
        text={`Button ${idx.toString()}`}
        idx={idx}
      />
    );
  });
  return (
    <div className="App">
      <PageLayout>{buttons}</PageLayout>
      <ButtonAddNew handleOnClick={increment} />
      <ButtonRemove handleOnClick={decrement} />
    </div>
  );
}

export default App;
