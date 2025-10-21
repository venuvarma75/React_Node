import React from 'react'

const Maxi = React.memo(({text}) => {
  console.log("Maxi")
  return (
    <div>
    <h2>{text}</h2>
    <h3>Maxi</h3>
    </div>
  )
}) 

export default Maxi
