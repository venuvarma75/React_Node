// import React, { useState, useMemo } from "react";

// const ThemeMemoComponent = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [randomNumber, setRandomNumber] = useState(0);

//   // Memoize the theme object
//   const theme = useMemo(() => {
//     console.log("Theme recalculated");
//     return {
//       backgroundColor: darkMode ? "#333" : "#fff",
//       color: darkMode ? "#fff" : "#000",
//       padding: "20px",
//       borderRadius: "8px",
//       textAlign: "center"
//     };
//   }, [darkMode]);

//   // Toggle theme
//   const toggleTheme = () => setDarkMode(prev => !prev);

//   // Generate random number
//   const generateRandomNumber = () =>
//     setRandomNumber(Math.floor(Math.random() * 100) + 1);

//   return (
//     <div style={theme}>
//       <h2>useMemo Theme Example</h2>
//       <p>Current Theme: {darkMode ? "Dark" : "Light"}</p>
//       <p>Random Number: {randomNumber}</p>
//       <button onClick={toggleTheme} style={{ margin: "10px" }}>
//         Toggle Theme
//       </button>
//       <button onClick={generateRandomNumber}>Generate Random Number</button>
//     </div>
//   );
// };

// export default ThemeMemoComponent;






import React,{useState,useMemo}from 'react'

const Themememo = () => {
    const [darkmode,setDarkMode]=useState(false)
    const [randomnumber,setRandomNumber]=useState()

     const theme = useMemo(() => {
    console.log("Theme recalculated");
    return {
      backgroundColor: darkmode ? "#333" : "#fff",
      color: darkmode ? "#fff" : "#000",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center"
    };
  }, [darkmode]);
 

    const RandomNumber=()=>{
         setRandomNumber(Math.floor(Math.random() * 100) +1)
    }
    const handleChange1=()=>{
        setDarkMode(prev=>!prev)
    }
    RandomNumber
    const handleChange2=()=>{
       setRandomNumber(Math.floor(Math.random() * 100)+1)
    }
  return (
    <div>
      <h3>Theme toggle:{darkmode?"Dark":"light"}</h3>
      <p>random Number:{RandomNumber}</p>

      <button onClick={handleChange1}>Themetoggle</button>
      <button onClick={handleChange2}>RNumber</button> 
    </div>
  )
}

export default Themememo
