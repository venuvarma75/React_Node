// components/CounterComponent.jsx
import React from "react";
import useCounter from "./useCounter";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: "5px" }}>Increment</button>
      <button onClick={decrement} style={{ margin: "5px" }}>Decrement</button>
      <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
    </div>
  );
};

export default CounterComponent;
