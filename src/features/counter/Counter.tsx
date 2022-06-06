import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  reset,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCountStatus,
  selectCountValue,
} from './counterSlice';

export function Counter() {
  const counterValue = useAppSelector(selectCountValue);
  const counterStatus = useAppSelector(selectCountStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncrementAmount(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{counterValue}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <input value={incrementAmount} onChange={handleAmountChange} />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
      </div>
      <div>
        <button
          disabled={counterStatus === 'loading'}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async Amount
        </button>
      </div>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}
