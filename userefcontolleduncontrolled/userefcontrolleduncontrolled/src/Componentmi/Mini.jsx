import React from 'react'


const Mini=React.memo( ({text}) => {
  console.log("Mini")
  return (
    <div>
      <h1>{text}</h1>
      <h3>Mini</h3>
    </div>
  )
})


export default Mini
