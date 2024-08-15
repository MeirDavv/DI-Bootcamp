import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const decrement = () => {
    setCount(oldCount => oldCount - 1)
  }
  const increment = () => {
    setCount(oldCount => oldCount + 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;