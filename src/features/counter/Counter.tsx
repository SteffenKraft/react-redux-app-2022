import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  reset,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncrementAmount(e.target.value);
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <input value={incrementAmount} onChange={handleAmountChange} />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
      </div>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}
