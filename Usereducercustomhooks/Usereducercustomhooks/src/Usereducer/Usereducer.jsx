// import React,{useState,useReducer}from 'react'


// const initialstate={count:0,state:""}
//  const reducerfunction=(state,action)=>{
//     console.log(state)
//     console.log(action)
//     switch(action.type) {
//        case "increment":
//         return {...state,count:state.count+1}
//     }
//        switch(action.type){
//         case "decrement":
//         return {...state,count:state.count-1}
//        }
//        switch(action.type){
//         case "input_text":
//             return{...state,state:action.payload}
    
//         default:
//             return state
//     }
  
         





//  }
// const UseReducer = () => {
//     // const [value,setValue]=useState("")
//     const [state,dispatch]=useReducer(reducerfunction,initialstate)
//     console.log(state,dispatch)
//     // const [count,setCount]=useState(0)
  
// const handleClick1=()=>{
//     dispatch({type:"increment"})
//     // setCount(count+1)
// }
// const handleClick2=()=>{
//     dispatch({type:"decrement"})
//     // setCount(count-1)
// }


//   return (
//     <div>


//         <h1>count:{state.count}</h1>
//         <h2>state:{state.state}</h2>
//         <input type="text" onChange={(e)=>dispatch({type:"input_text",payload:e.target.value})} /> <br/>
//         <br/>

//         <button onClick={handleClick1}>+</button>
//         <button onClick={handleClick2}>-</button>

//     </div>
//   )
// }

// export default UseReducer
    // import React,{useState,useReducer} from 'react'

    // const initialstate={count:0}
    //  const myreducer=(action,state)=>{
    //     console.log(action)
    //     switch(action.type){
    //         case "increment":
    //         return {count:state.count+1}
        
    //         default:
    //         return state
    //     }

        


    //  }
    // const UseReducer = () => {
    //     const[state,dispatch]=useReducer(myreducer,initialstate)
    //     const handleClick=()=>{
    //         dispatch({type:"increment"})
    //     }

    //   return (
    //     <div>
    //       <h1>count:{state.count}</h1>
    //       <button onClick={handleClick}>+</button>
    //     </div>
    //   )
    // }
    
    // export default UseReducer
    import React, { useReducer } from "react";

// Initial state
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Usereducer;
