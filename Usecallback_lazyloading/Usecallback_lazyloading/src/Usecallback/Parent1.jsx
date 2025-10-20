import React,{useState} from 'react'
import Child from "./Child1"
const Parent=() => {
    const [input,setInput]=useState("")
    const [theme,setTheme]=useState("False")
    console.log(input)
    console.log(theme)
    const handleChange=(event)=>{
   setInput(event.target.value)
}
  const handleClick=()=>{
    setTheme(!theme)
  }
  const convertArray=()=>{
    return input.split("");
  }
  console.log(convertArray())
  
  return (
    <div style = {{backgroundColor:theme? "white":"black",
    color:theme ?"black":"white",}}>
   <h1>hello</h1>   
   <input type="text" onChange={handleChange} value={input}/><br/>
   <button onClick={handleClick}>Theme</button>
   <Child array={convertArray}/>
    </div>
  )
}

export default Parent




// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//   const [input, setInput] = useState("");
//   const [theme, setTheme] = useState(false);

//   const handleChange = (event) => {
//     setInput(event.target.value);
//   };
//   const handleTheme = () => {
//     setTheme(!theme);
//     console.log("theme changed");
//   };

//   const convertArray = () => {
//     return input.split("");
//   };

//   const array = useCallback(() => {
//     return convertArray;
//   }, [input]);

//   return (
//     <div
//       style={{
//         backgroundColor: theme ? "black" : "white",
//         color: theme ? "white" : "black",
//       }}
//     >
//       <h1>USE CALLBACK code</h1>
//       <input type="text" onChange={handleChange} value={input} />
//       <br />
//       <button onClick={handleTheme}>theme change</button>
//       <br />
//       <Child array={array} />
//     </div>
//   );
// };

// export default Parent;