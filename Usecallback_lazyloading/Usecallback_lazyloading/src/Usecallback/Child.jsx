// import React,{ useState,useEffect } from 'react'

// const Child = ({name}) => {
//  const [data, setData] = useState();
//     // console.log(name)
//     const  useEffect=(()=>{
//    console.log("name change")
//      setData(name())
//     },[name])
//   return (
//     <div>
//       <p>name is:{data}</p>
//     </div>
//   )
// }

// export default Child


import React, { useEffect, useState } from "react";

const Child = ({ name }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("Name function changed");
    setData(name()); // Call the memoized function to get the value
  }, [name]);

  return (
    <div>
      <p>Name is: {data}</p>
    </div>
  );
};

export default Child;
