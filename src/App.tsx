import React, { useRef, useState } from "react";
import "./App.css";
import { PageLayout } from "./components/PageLayout";
import {
  ButtonLoadSomething,
  ButtonLoadSomethingProps,
} from "./components/ButtonLoadSomething";
import { ButtonAddNew } from "./components/ButtonAddNew";
import { ButtonRemove } from "./components/ButtonRemove";

const useMemolize = true;

function App() {
  const [count, setCount] = useState<number>(10);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const prevButtonPropsArrRef = useRef<ButtonLoadSomethingProps[]>([]);
  const prevButtonsRef = useRef<React.ReactNode[]>([]);

  const buttonPropsArr: ButtonLoadSomethingProps[] = [...Array(count)].map(
    (_, idx) => {
      return {
        text: `Button ${idx.toString()}`,
        idx,
      };
    },
  );
  const buttons = buttonPropsArr.map((p, idx) => {
    if (!useMemolize) return <ButtonLoadSomething {...p} key={idx} />;
    let requireRerender = true;
    if (
      prevButtonPropsArrRef.current[idx] &&
      prevButtonsRef.current[idx] &&
      prevButtonPropsArrRef.current[idx].text === p.text // 再レンダリングするかどうかを判定する条件
    ) {
      requireRerender = false;
    }

    return requireRerender ? (
      <ButtonLoadSomething {...p} key={idx} />
    ) : (
      prevButtonsRef.current[idx]
    );
  });
  prevButtonPropsArrRef.current = buttonPropsArr;
  prevButtonsRef.current = buttons;
  return (
    <div className="App">
      <PageLayout>{buttons}</PageLayout>
      <ButtonAddNew handleOnClick={increment} />
      <ButtonRemove handleOnClick={decrement} />
    </div>
  );
}

export default App;
