import React,{useState}from 'react'
import "./App.css"
const App = () => {
  const [state,setState]=useState([])
  const [addcard,setAddCard]=useState([])
  const Electronics=[{ products:["smartphones","watches","laptops"]}]
  const Fashion=[{ products: ["Women's wear","Men's wear,","kids wear"]}]
  const Recipe=[{products:["chicken","prawns","fish"]}]

  const handleClick=()=>{
    setState(Electronics[0].products)
  }
  const handleClick1=()=>{
    setState(Fashion[0].products)
  }
  const handleClick2=()=>{
    setState(Recipe[0].products)
  }
 const handleAddCard=(item)=>{
  setAddCard((prev)=>[...prev,item])
 }

  
  return (
    <div>
   
    <button onClick={handleClick}>Electronics</button>
    <button onClick={handleClick1}>Fashion</button>
    <button onClick={handleClick2}>Recipe</button>

    <div>
      <h1>Products</h1>
      {state.length > 0 ? (
     state.map((x,index)=>(
    <div>
      <h1>{x}</h1>
      <button onClick={()=>handleAddCard(x)}>AddCard</button>
    </div>
     ))
    ) : (
      <p>please select the item</p>
  
     )}
     </div>
     <div>
       <h1>Card Items</h1>
       {addcard.length > 0 ? (
        addcard.map((x)=>(
          <h1>{x}</h1>
        ))
        ) : (
          <p> No Cards Details Avalible</p> 
        
       )}
     </div>
     </div>

 
  );
};

export default App
