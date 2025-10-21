import React,{useMemo,useState} from 'react'

const Usememo = () => {
    const [add1,SetAdd1]=useState(0)
    const [add2,SetAdd2]=useState(0)
    const [count,setCount]=useState(0)
  const addition=()=>{
   console.log("rendering")
    return add1+add2
  }
  const useMemo=(()=>{
   return  addition()
    


    },[add1,add2])

    const handleChange=()=>{
        console.log("increment")
        setCount(count+1)
    }
  return (
    <div>
    <input type="number"  onChange={(e)=>{SetAdd1(Number(e.target.value))}} value={add1}/>
    <input type="number"  onChange={(e)=>{SetAdd2(Number(e.target.value))}} value={add2}/>
    <h1>Addition of add1+add2{addition()}</h1>
    <button onClick={handleChange}>Add</button>

    </div>
  )
}

export default Usememo
