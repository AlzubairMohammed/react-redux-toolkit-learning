import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  let [value, setValue] = useState(0);
  const dispatch = useDispatch();
  //   const increaseValue = () => {
  //     setValue(+value);
  //   };
  return (
    <>
      <h1>{count}</h1>
      <h1>{value}</h1>
      <button onClick={() => setValue(++value)}>value +</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
