import React ,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbarr/Navbarr"
// import Cart from "./components/Cart/Cart"
import Recipes from "./components/Recipes/Recipes"
import axios from 'axios';
import Cart from "./components/Cart/Cart"
import Favs from "./components/Favs/Favs"
 import NotFound from "./components/notFound/notFound"
import RecipeDetails from "./components/Recipes/RecipeDetails"

import Home from "./components/Home/Home"
import {Routes,Route} from "react-router-dom"
const App = () => {
  const [recipes ,setRecipes] =useState([])
  useEffect(()=>{
    let rowdata=JSON.parse(localStorage.getItem('rowdata'))
    console.log(rowdata,'dfghjfghjfgh')
    if(rowdata){
      console.log(rowdata,'sannnnnnn')
         setRecipes(rowdata);

    }else{
    axios.get("https://dummyjson.com/recipes") 
    .then(res=>{
      console.log(res.data.recipes)
      let data12=res.data.recipes
      setRecipes(res.data.recipes)
      localStorage.setItem('rowdata',JSON.stringify(data12))
    })
  }
  },[])
  return (
    <div>

      <Navbarr/>
      <Routes>  
         <Route path="/" element={<Home/>}/>
         <Route path="/recipes" element={<Recipes recipesData={recipes}/>}/>
         <Route path="/recipe/:id" element={<RecipeDetails recipesDataToRecipeDetails={recipes}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favs" element={<Favs/>}/>
          <Route path="/notFound" element={<NotFound/>}/>
        
      </Routes>
    </div>
  )
}

export default App
