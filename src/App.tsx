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

  // コンポーネントのpropsの配列を保持するref
  const prevButtonPropsArrRef = useRef<ButtonLoadSomethingProps[]>([]);
  // 描画し終わったコンポーネントの配列を保持するref
  const prevButtonsRef = useRef<React.ReactNode[]>([]);

  // コンポーネントのpropsの配列
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
      // 与えられたインデックスのものがすでにあり、かつpropsに変化が生じていなければ再レンダリング不要
      requireRerender = false;
    }

    return requireRerender ? (
      <ButtonLoadSomething {...p} key={idx} />
    ) : (
      // 再レンダリング不要な場合、refから取り出して返却
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
