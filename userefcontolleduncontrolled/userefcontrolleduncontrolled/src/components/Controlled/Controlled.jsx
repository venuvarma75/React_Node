import React,{useState} from 'react'
import Child from "./Child"
const controlled = () => {
const [name,setName]=useState("")
    const handleChange=e=>{
        setName(e.target.value)
    }
  return (
    <div>
       <h3>name:{name} </h3>
    
        <input type="text" onChange={handleChange} />
 <Child handleChange={handleChange}/>
    </div>
  )
}

export default controlled
