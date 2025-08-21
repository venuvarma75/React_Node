import React from 'react'

 import {useNavigate} from "react-router-dom"
const SellerDashBoard = () => {
    const LoggedinSeller=JSON.parse(localStorage.getItem("LoggedinSeller"))
    const navigate=useNavigate()
    const handleLogout=()=>{
       
        const confirmation=confirm("are you  sure to logout");
        if (confirmation){
             localStorage.removeItem("LoggedinSeller")

        if(localStorage.getItem("LoggedinSeller ")){
            navigate(`$(LoggedinSeller.role)DashBoard`)
    }else{ 
        navigate("/login")
    }

        }else{
            alert("you choosed to saty in dashboard")
        
  }
}

  return (
    <div>
        SellerDashboard
        <div>
         * 
               <h1>{LoggedinSeller.name}</h1>
                <p>{LoggedinSeller.email}</p>
                <span>{LoggedinSeller.role}</span>
            
        </div>
       <h1 onClick={handleLogout}><button>Logout</button></h1> 
    </div>
  )
}

export default SellerDashBoard
