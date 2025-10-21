
import {useState,useEffect} from "react"

const App=()=>{
     const [apiData,setApiData]=useState([])
    const [filteredData,setFilteredData]=useState([])

 const handleClick=(abc)=>{
  const filData=apiData.filter(x=>x.category === abc)
  console.log(filData)
 }   

useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        setApiData(res) 
        setFilteredData(res)
    })
})

    return (
        <div>
          <button onClick={()=>handleClick("electronics")}>electronics</button>
          <button onClick={()=>handleClick("jewelery")}>jewellery</button>
          <button onClick={()=>handleClick("men's clothing")}>mens</button>
          <button onClick={()=>handleClick("women's clothing")}>womens</button>
        
       {filteredData.map((x)=>{
        return (
            <div>
           <h1> {x.title} </h1>
           <h1>{x.price}</h1>
           <img src={x.image} alt="" style={{width:"250px"}}/>
            </div>
        )

       })}
       </div>
    )
}

export default App