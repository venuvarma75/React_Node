// hooks/useToggle.js
import { useState } from "react";

const Usetoggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
};

export default Usetoggle;
