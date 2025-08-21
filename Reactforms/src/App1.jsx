import React, {useState} from 'react'

const App = () => {
    const [signupDetails,setSignUpDetails]=useState({
      name:"",email:"",password:"",role:""
    })
    console.log(signupDetails)
    

  return (
    <div>
       <input type="'text'" placeholder='name' id="name" onChange={(e)=>setSignUpDetails({...signupDetails,name:e.target.value})}/>
       <input type="'email'" placeholder='email' id="email" onChange={(e)=>setSignUpDetails({...signupDetails,email:e.target.value})}/>
      <input type="'password'" placeholder='password' id="password" onChange={(e)=>setSignUpDetails({...signupDetails,password:e.target.value})}/>
      <select name="" id="role" onChange={(e)=>setSignUpDetails({...signupDetails,role:e.target.value})}>
  <option value="">select your role:</option>
  <option value="recuiter">Recuiter</option>
  <option value="jobseeker">Jobseeker</option>
</select>
  <button>Signup</button>
    </div>
  )
}

export default App
