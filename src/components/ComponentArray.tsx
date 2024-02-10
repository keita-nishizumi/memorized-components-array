import React, { useRef, useState } from "react";
import { ButtonAddNew } from "./ButtonAddNew";
import { ButtonRemove } from "./ButtonRemove";
import { PageLayout } from "./PageLayout";
import {
  ButtonLoadSomething,
  ButtonLoadSomethingProps,
} from "./ButtonLoadSomething";
import { Box } from "@chakra-ui/react";
type ComponentArrayProps = {
  title: string;
  bg: string;
  memolize?: boolean;
};
export const ComponentArray = ({
  title,
  bg: bgProps,
  memolize,
}: ComponentArrayProps) => {
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
    if (!memolize) return <ButtonLoadSomething {...p} key={idx} />;

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
    <>
      <PageLayout>
        <Box bg={bgProps} w="100%" p={4} color="white">
          {title}
        </Box>
        {buttons}
        <ButtonAddNew handleOnClick={increment} />
        <ButtonRemove handleOnClick={decrement} />
      </PageLayout>
    </>
  );
};
