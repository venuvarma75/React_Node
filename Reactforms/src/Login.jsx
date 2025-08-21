import React,{useState} from "react";
import "./App1.css"
 import {useNavigate} from "react-router-dom"
const Login = () => {
   const navigate=useNavigate()
  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const MySubmit=(e)=>{
    e.preventDefault();
    console.log(LoginDetails)
  };

  const accounts=JSON.parse(localStorage.getItem("signUpAccounts")) 

  const matchedLoggedinSeller=accounts.find(seller=>seller.email === LoginDetails.email 
  && seller.password === LoginDetails.password)
console.log(matchedLoggedinSeller)

if(matchedLoggedinSeller){
   localStorage.setItem("LoggedinSeller",JSON.stringify(matchedLoggedinSeller))
  navigate(`/${matchedLoggedinSeller.role} DashBoard`);
  alert (`successfully logged in and re-directing to ${matchedLoggedinSeller.role} dashboard`);
}



 
  return (
    <div>
         <form onSubmit={MySubmit}>
      <input
        type="email"
        id="email"
        name=""
        placeholder="email here"
        required
        onChange={(e) =>
          setLoginDetails({ ...LoginDetails, email: e.target.value })
        }
      />
      <input
        type="password"
        id="password"
        name=""
        placeholder="password here"
        required
        onChange={(e) =>
          setLoginDetails({ ...LoginDetails, password: e.target.value })
        }
      />
      <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
