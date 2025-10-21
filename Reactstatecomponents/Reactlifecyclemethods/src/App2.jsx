import React, { Component } from 'react'
import "./App2.css"
export default class App2 extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      loading:true
    }
  }
//   handleData=(btnType)=>{


// if(btnType === "fakeStoreProducts"){
// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
//       console.log(res,"data")
//       this.setState({data:res,loading:false})
//     })   
// }else if(btnType === "dummyJsonProducts"){
//   fetch("https://dummyjson.com/products").then(res=>res.json()).then(res=>{
//       console.log(res.products,"data")
//       this.setState({data:res.products,loading:false})
//     })  
// }
// else if(btnType === "dummyJsonRecipes")
//   {
//    fetch("https://dummyjson.com/recipes").then(res=>res.json()).then(res=>{
//       console.log(res,"data")
//       this.setState({data:res.recipes,loading:false})
//     })  
         
  
// }else{
//   return ;
// }
//   }


  // componentDidMount(){
  //   fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
  //     console.log(res,"data")
  //     this.setState({data:res})
  //   })
  // }


    handleData=(btnType)=>{

let url;
if(btnType === "fakeStoreProducts"){
  url="https://fakestoreapi.com/products";
}else if(btnType === "dummyJsonProducts"){
 url="https://dummyjson.com/products";
}
else if(btnType === "dummyJsonRecipes") {
 url="https://dummyjson.com/recipes";
   
}else{
  return ;
}


fetch(url).then(res=>res.json()).then(res=>{
  console.log(res,"64");
  const finalRes= res.products || res.recipes || res;
  console.log(finalRes,"finalRes")

  
  localStorage.setItem("data",JSON.stringify(finalRes))
  this.setState({loading:false})
})


  }

  

  componentDidUpdate(){
    //    const dataFromLs=JSON.parse(localStorage.getItem("data"))
    // this.setState({data:dataFromLs,loading:false})
    // console.log(this.state.data,"data from state")
     const dataFromLS = localStorage.getItem("data");
    if (dataFromLS) {
      const parsedData = JSON.parse(dataFromLS);
      this.setState({ data: parsedData, loading: false });
    }
  }

  render() {

 
    return (
      <div id='App2'>
        <div id='app2_child_1'>
          <button onClick={()=>this.handleData("fakeStoreProducts")}>fakeStoreProducts</button>
          <button onClick={()=>this.handleData("dummyJsonProducts")}>dummyJsonProducts</button>
          <button onClick={()=>this.handleData("dummyJsonRecipes")}>dummyJsonRecipes</button>
        </div>
        <div id='app2_child_2'>
         {this.state.loading ? "pls click any btn to get the data":this.state.data.map((x,index)=>{
          return (
            <div key={index}>
            <img src={x.image || x.thumbnail} width={200}/>
            <h1>{x.title || x.name}</h1>
            </div>
          )
         })}
        </div>
      </div>
    )
  }
}