import React, { Component } from 'react'

export default class faksData extends Component {
    componentDidMount(){
        letDataFromLS=localStorage.getItem("fakeData")
        fetch("https://fakestoreapi.com/products") .then(res=res.json())
        .then((res)=>{
            console.log(res)
            localStorage.setItem=("fakeData",JSON.stringify(res))
        })
    }







 
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
