 import React from 'react'
 import Form from "./Component/Form" 
 import FetchAPi from './Component/FetchAPi' 
import { useDispatch ,useSelector} from 'react-redux'
import { incrementAction,randomAction } from './redux/actions'


const App = () => {
  const state =useSelector((state)=> state.count);
  // const random =useSelector((state)=> state.number);
  
  // console.log(state)
  const dispatch =useDispatch()
  const handleInc = () =>{
    dispatch(incrementAction());
  };

 const handleRandomNum = ()=>{
   const random = Math.floor(Math.random() * 10);
  dispatch(randomAction());

 }

  return (
    <div>
       <h1>Redux day 2</h1>
      <p>count {state.count}</p>
      <button onClick={handleInc}>increase number</button> 
      <br/>
      <br/>
      <p>random number{state.number}</p>
      <p>digit {state.digit}</p>
      <button onClick={handleRandomNum}>click to random value</button>
      <Form/> 

      <FetchAPi/>
    </div>
  )
}

export default App
