import  React ,{useState} from 'react'
import data from"./data"
const Products = () => {
  const [fakeStoreData, setFakeStoreData]=useState([])
  const handleClick=(cat)=>{
    console.log(cat == "women's clothing")
    if(cat=="women's clothing"){
    const filterdata = data.filter(x=>x.category == "women's clothing")   
    console.log(filterdata)
    setFakeStoreData(filterdata)
    }else if (cat=="electronics"){
      const filterdata = data.filter(x=>x.category == "electronics")
    console.log(filterdata)
    setFakeStoreData(filterdata)
    }
  }

  return (
    <div>
       <button onClick={()=>handleClick("women's clothing")}>womens</button>
      <button onClick={()=>handleClick("electronics")}>electronis</button>
       {/* {fakeStoreData.length > 0 ? <> */}
      {fakeStoreData.map((x)=>{
        return (
          <>
          <h1>{x.title}</h1>
          </>
        )
      })}
     {/* </>:"no data found" } */}
    </div>
  )
}

export default Products
   

