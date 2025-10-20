import React, { useState, useEffect } from 'react';

const Child = ({ array }) => {
  const [list, setList] = useState([]);
  console.log(array)

  useEffect(() => {
    setList(array);
  }, [array]);
  console.log(list)
  return (
    <div>
{/*       
         {list.map((item, index) => ( 
           <li key={index}>{item}</li> 
         ))} */}
    
    </div>
  );
};

export default Child;




// import React, { useEffect, useState } from "react";

// const Child = ({ array }) => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     console.log("child");
//     setList(array());
//   }, [array]);

//   return (
//     <div>
//       {list.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </div>
//   );
// };

// export default Child;
