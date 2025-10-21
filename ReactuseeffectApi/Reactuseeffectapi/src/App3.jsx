import React, {useState,useEffect} from 'react'

const App3=()=>{
    const [data,setData]=useState([])
    const [cat,setCat]=useState("")


useEffect(()=>{
    let url="https://fakestoreapi.com/products"
// if(cat !=="" && cat !=="all"){ 
  if(cat===cat){
    url=`https://fakestoreapi.com/products/category/${cat}`;
}

    fetch(url).then((res)=>res.json())
     .then((res)=>{
         console.log(res)
         setData(res)
    
    })
},[cat])

return (
    <div>
         <button onClick={()=>setCat("electronics")}>electronics</button>
        <button onClick={()=>setCat("women's clothing")}>womens</button>
        <button onClick={()=>setCat("men's clothing")}>mens</button>
        <button onClick={()=>setCat("jewelery")}>jewellery</button>


        {data.map((p)=>{

            return (
                <>
                <div>
                {p.title}
                {p.price}
                </div>
                </>
            )
        })}
    </div>
)
}

export default App3

