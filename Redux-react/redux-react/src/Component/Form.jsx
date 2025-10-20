import React from 'react'
import {useDispatch} from "react-redux"
import { inputAction } from "../redux/actions"
const Form = () => {
    const dispatch=useDispatch();
    const handleChange=(event)=>{
         const value = event.target.value;
        console.log(value);
        dispatch(inputAction(value));
    }
  return (
    <form>
        <input type="text" onChange={handleChange}/>
        <p>value</p>
    </form>
  );
};

export default Form
