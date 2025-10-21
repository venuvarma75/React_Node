import {useState,useEffect } from 'react'

import './App.css'

// function App2() {
//   const [count, setCount] = useState(0)
//   const handleClick=()=>{
//     setCount(count+10)
//     console.log(count)
//     setCount(count)
//    }
//  useEffect(()=>{
//   alert("hyderabad is a beautifull city")
//  })
//   useEffect(()=>{
//   alert("hyderabad city is famous for biriyani")
//  })
//   useEffect(()=>{
//   alert("Hitechcity is souurounded by large IT Companies")
//  })

//  useEffect(()=>{
//   fetch("https://fakestoreapi.com/products") .then(res=>res.json()) .then(res=>{
//     console.log(res)
//   })
//   setCount(res)
//  }) 
  // return (
  //   <>
  //     <div>
  //       <h1>{count}</h1>
  //      <button onClick={handleClick}>+</button>
  //     </div>
  //     </>
  //    )
  //    }

     function App2() {
  const [apiData, setApiData] = useState([])
  


 useEffect(()=>{
  fetch("https://fakestoreapi.com/products") 
  .then((res)=>res.json())
   .then((res)=>{
    console.log(res)
    
     setApiData(res)
  })
 },[]);                                                   
  return (
    <>
      <div>
      fakestore data 
      </div>
      </>
     )
     }
export default App2
