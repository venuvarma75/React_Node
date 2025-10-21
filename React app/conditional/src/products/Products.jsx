import React from 'react'
import data from "./data"
// import electronics from "./Electronics"
// import jewellery from "./Jewelery"
const Products = () => {
    let userChooseCatPrompt ="men's clothing"
   
  return (
  <div>
    
      {data.map((item,index)=>{
        if (userChooseCatPrompt === item.category){
          console.log(item);
          return(

            <div>
            <img src={item.image}></img>
            <p>{item.price}</p>
            </div>
          );
        }
        
          return

        
        })}
        </div>
      

    );
    }

export default Products
