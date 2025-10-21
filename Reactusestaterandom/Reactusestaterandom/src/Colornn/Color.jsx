import React ,{useState}from 'react'
const Color = () => {
 const [randomclr, setRandomClr]=useState("pink")
 let handleRandomClrGenerate=()=>{
  let chars="abcdef0123456789";
  let color="#"
   for(let i=0;i<6;i++){

   const randomIndex= Math.floor(Math.random ()*chars.length);
      color+=chars[randomIndex] 
   }
      console.log(color)
      setRandomClr(color)
}
 
 return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:randomclr ,height:"100vh"}}>
      <button onClick={handleRandomClrGenerate}>randomColor</button>
      {/* <button  onClick={()=>myColor("Blue")}>Blue</button>
      <button  onClick={()=>myColor("Orange")}>Orange</button> */}
    </div>
  )
}

export default Color
   
   
  