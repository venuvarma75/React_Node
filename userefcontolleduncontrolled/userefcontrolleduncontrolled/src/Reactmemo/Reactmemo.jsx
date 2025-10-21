import React, { useState } from 'react';
import Maxi from '../Componentmi/Maxi';
import Mini from '../Componentmi/Mini';

const Reactmemo = () => {
  const [mini, setMini] = useState("beautifull");
  const [maxi, setMaxi] = useState("welcome");
   const [count,setCount]=useState(0)
   console.log("count")

   const handleChange=()=>{
    setCount(count+1)
   }

  return (
    <div>
      <h1>Reactmemo</h1>
      <Maxi text={maxi} />
      <Mini text={mini} />
      <button onClick={handleChange}>clicked</button>
    </div>
  );
};

export default Reactmemo;
