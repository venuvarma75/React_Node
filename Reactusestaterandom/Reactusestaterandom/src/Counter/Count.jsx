import React, {useState} from 'react'
const Count =() => {
  const [count, setCount] = useState(40);


const myCount=(abc)=>{
  if(abc === 0){
    setCount(0)
  }else{
    setCount(count+abc);
  }
}
 


 
  return (
    <div style={{backgroundColor:"skyblue"}}>
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <button onClick={()=>myCount(20)} disabled={count===100}>+</button>
       <button onClick={()=>myCount(-20)} disabled={count===0}>-</button>
      <button onClick={()=>myCount(0)}>reset</button>

    </div>
  )
}


 export default Count