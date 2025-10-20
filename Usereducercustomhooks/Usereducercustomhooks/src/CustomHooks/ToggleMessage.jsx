// components/ToggleMessage.jsx
import React from "react";
import useToggle from "./useToggle";

const ToggleMessage = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleVisibility} style={{backgroundColor:"pink"}}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p style={{ marginTop: "20px",backgroundColor:"lightcoral"}}>👋 Hello, this is a toggled message!</p>}
    </div>
  );
};

export default ToggleMessage;
