import React from 'react'
import "./Navbaar.css"
 import {Link} from 'react-router-dom'
const Navbaar = () => {
  return (
    <div id="navbar">
      <div>
        Varma 
      </div>
    
       <Link id="link" to="/Count">
       <button>Count</button></Link>
         <Link id="link" to="/Color">
       <button>Color</button></Link>
   <Link id="link" to="/Products"><button>Products</button></Link>

    </div>
  )
}

export default Navbaar
