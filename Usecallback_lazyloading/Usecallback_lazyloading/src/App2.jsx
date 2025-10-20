import React, { useState, useCallback } from "react";
import Lazyloading from "./Lazyloading/Lazyloading"
import Home from "./Lazyloading/Home"
import Profile from "./Lazyloading/profile";
import Child from "./Usecallback/Child";
import Parent from "./Usecallback/Parent"; 

const App = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const NameChange = useCallback(() => {
    const name = "varma";
    return show ? name.toUpperCase() : name.toLowerCase();
  }, [show]);

  return (
    <div>
      <h1>Parent</h1>
      <p>Counter: {count}</p>
      
      <Child name={NameChange} />
      <Parent />

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>

      <button onClick={() => setShow((prev) => !prev)}>
        Toggle Name Case
      </button>

      <Lazyloading/>
      <Home/>
      <Profile/>
    </div>
  );
};

export default App;