// import React,{useState} from 'react'
// import {useNavigate} from "react-router-dom"
// import "./App1.css"
// const App = () => {
// const navigate = useNavigate()
//     const [signupDetails, setSignUpDetails] = useState({
//         name:"",email:"",password:"",role:""})
         
//         const HandlerSubmit=(e)=>{
//             e.preventDefault();
//             console.log(signupDetails,"signupDetails")


//             const allAccounts=JSON.parse(localStorage.getItem("signUpAccounts")) || []

//             allAccounts.push(signupDetails)
//            localStorage.setItem("signUpAccounts",JSON.stringify(allAccounts)) 
//            navigate("./login")
//            alert("successfully signUp !!!")
//         }
       
//   return (
//     <div>
//         <form action="" onSubmit={HandlerSubmit}>
//     <input type="text" id=" name" name="name" placeholder="name here" required onChange={(e)=>setSignUpDetails({...signupDetails,name:e.target.value})} />
//     <input type="email" id=" email" name="" placeholder="email here" required onChange={(e)=>setSignUpDetails({...signupDetails,email:e.target.value})}/>
//     <input type="password" id=" password" name="" placeholder="password here" required onChange={(e)=>setSignUpDetails({...signupDetails,password:e.target.value})} />
//     <select name="" id="role" onChange={(e)=>setSignUpDetails({...signupDetails,role:e.target.value})}>
//         <option value="">choose your role:-</option>
//         <option value="seller">seller</option>
//         <option value="buyer">buyer</option>

//     </select>
    
//   <button type="submit">SignUp</button>
//   </form>

//     </div>
//   )
// }

// export default App



import React from 'react';
import { Routes, Route,Navigate} from 'react-router-dom';
import SellerDashBoard from './SellerDashBoard';
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  return (
    <div>
      <Routes>
       <Route path="/sellerDashBoard" element={<SellerDashBoard/>}/>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
