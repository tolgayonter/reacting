import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

export default function CounterActions() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement (-)</button>
      <button onClick={() => dispatch(increment())}>increment (+)</button>
    </div>
  );
}
