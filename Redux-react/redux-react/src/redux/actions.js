 import axios from "axios"
 export const incrementAction=()=>{
  return  {
       type:"increment",

  };
}
 export const randomAction=()=>{
  return {
    type:"random_number",
    // payload: random,
  }
 }

 export const inputAction =(value)=>{
  return {
    type:"UPDATE_INPUT",
    payload: value,
  };
 };

 export const fetchAPi = ()=>{
  return async(dispatch) =>{
    console.log("api")
       const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
       );
      //  console.log(response)
      dispatch({
        type: "fetch_api",
        payload:response.data, 
      })
  }
 }