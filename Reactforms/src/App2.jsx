import React ,{useState} from 'react'

const App2 = () => {
  console.log("Good morning")
  const a=20
  const [name,setName]=useState("")
   const [email,setEmail]=useState("")
  console.log("name by vihan",name)
  console.log("my email is done",email)

  
  let  handleChange=(xyz)=>{
console.log(xyz.target.value,"input value")
setName(xyz.target.value)
  }
  {a}

 const myChange=(mno)=>{
  console.log(mno.target.value,"input value")
}

   return (
       <div>
       <input type="'text'" placeholder='name' id="name" onChange={(e)=>console.log(e.target.value)}/>
       <input type="'text'" placeholder='name' id="name" onChange={(e)=>handleChange(e)}/>


     <input type="email" placeholder="email" id="email" onChange={(e)=>myChange(e)} />


    
     <div style={{backgroundColor:"lightblue",padding:"4rem"}}>
      <span>name:{name}</span> <br/>
      <span>email:{email}</span>
     </div> 

      <input type="'email'" placeholder='email' id="email"/>
      <input type="'password'" placeholder='password' id="password"/>
      <select name="" id="role">
  <option value="">select your role:</option>
  <option value="recuiter">Recuiter</option>
  <option value="jobseeker">Jobseeker</option>
</select>
  <button>Signup</button>

    </div>
     )
 }





export default App2
