// Day1 Examples

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:20,
//       count:50
//     }
//   }
//  myCount=()=>{
//   this.setState({count:this.state.count+20})
//  }
//  myCount=()=>{
//   this.setState({count:this.state.count+50})
//  }
   
//   render() {
//     return (
//       <div>
//         {this.state.count+20}
//         {this.state.count+50}

//         <button onClick={this.myCount}>Count</button>
//         <button onClick={this.myCount}>Count</button>

//         <h1>Hello DidMount</h1>
//         <p>this is called class based componenets</p>
//       </div>
//     )
//   }


//    componentDidMount(){
//     console.log("this is React life cycle methods ")
// }

//    componentDidMount(){
//     console.log("this is React life cycle methods ")
//     console.log("this is beautifull ")
 
//   }
// }

//First Example

// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//         data:[]
//     }
//   }
//  myData=()=>{
//   fetch('https://fakestoreapi.com/products') .then(res=>res.json())
//   .then((res)=>{
//     console.log(res)
//     this.setState({data:res})
//   })
  
//  }
//   render(){
//     return (
//       <div>
//       <button onClick={this.myData}>getdata</button>
//       {this.state.data.map((p)=>{
//         return (
//           <>
//          <h2>{p.title}</h2>
//           </>
        
//         )
//       })}

  

//       </div>
//     )
//   }
// }

// export default App 


// Day2 Examples
import React, { useState } from 'react'
class App extends React.Component{
  constructor(){
    super()
    this.state={
        data:[],
        loading:true,
        name:false
    } 
  }
 componentDidMount(){
    let dataFromLS=localStorage.getItem("fakeData")
setTimeout(()=>{
  if(dataFromLS){
     let data23= JSON.parse(dataFromLS)
    this.setState({data:data23})
    this.setState({loading:false})
 
  }
  else{
  fetch('https://fakestoreapi.com/products') .then(res=>res.json())
  .then((res)=>{
    console.log(res);
    this.setState({data:res}) 
    let data11=res
    localStorage.setItem("fakeData",JSON.stringify(data11))
    this.setState({ loading:false})
      this.setState({name:true})

  })
    }
},2000)
  
 }
  render(){
    if(this.state.loading){
      return <h1>Please wait .... a moment loading</h1>
    }
    return (
      <div>
      {/* <button onClick={this.myData}>getdata</button> */}
      <h1>Fake data</h1>
      {this.state.data.map((p)=>{
        return (
          <>
         <h2>{p.title}</h2>
         <img src={p.image} alt="" />
          </>
        
        )
      })}

  

      </div>
    )
  }
}

export default App 