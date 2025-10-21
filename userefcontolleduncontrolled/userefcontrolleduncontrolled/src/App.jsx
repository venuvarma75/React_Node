import React ,{useRef,useState,useEffect}from 'react'
import Controlled from "./components/Controlled/Controlled"
import {Router,Route} from "react-router-dom"
import Usememo from "./Usememo/Usememo"
import Reactmemo from "./Reactmemo/Reactmemo"
import Themememo from "./Themememo/Themememo"
const App = () => {
    const [count,setCount]=useState(0)
  const myRef=useRef(0)
  // useEffect(()=>{
  //   myRef.current=myRef.current+1
  // })
  // console.log(myRef.current)
  // const handleClick=()=>{
  //   myRef.current="hello"

    const handleIncrement=()=>{
      myRef.current+=1
      console.log(myRef)
    }
      const handleDecrement=()=>{
        myRef.current-=1
        console.log(myRef)
      
      
    }
  
  
  return (
    <div>
    {/* <h2 ref={myRef}>count{myRef.current}</h2> */}
    {/* <input type="text" onChange={(e) => setCount(e.target.value)}/> */}
    <h1>rerendering</h1>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <Controlled/>
    <Usememo/>
    <Reactmemo/>
    <Themememo/>
    </div>
  )
}

export default App
