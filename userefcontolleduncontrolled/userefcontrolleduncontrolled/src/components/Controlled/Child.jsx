import React from 'react'

const Child = (props) => {
   
    
  return (
    <div>
    
      <input type="text"  onChange={props.handleChange}/>
    </div>
  )
}

export default Child
