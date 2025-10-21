import React from 'react'
import "./Recipes.css"
 import {Button, Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const RecipeDetails = ({ recipesDataToRecipeDetails}) => {
    console.log(recipesDataToRecipeDetails,"data")
    const idRecipe=useParams()
    // console.log(typeof id.id)

   const MatchedRecipe=recipesDataToRecipeDetails.find((recipe)=>recipe.id===Number(idRecipe.id))
    console.log(MatchedRecipe,"mrecipe")

    
    const handleCartItems=(cartItem)=>{
      console.log(cartItem,'qwerty')
    let cartItems1=JSON.parse(localStorage.getItem("cartItems21")) || []
      // console.log(typeof cartItems,"cartItems")
      cartItems1.push(cartItem)
      localStorage.setItem("cartItems21",JSON.stringify(cartItems1))
    }
    
  return (
     <div id="singlerecipe">
     <div id="img"><img src={MatchedRecipe.image}/></div>   
      <div>
        <h1>{MatchedRecipe.name}</h1>
     <p>{MatchedRecipe.cuisine}</p>
    </div>
     <div style={{display:"flex",gap:20}}>
        <span><Button variant="outline-primary" onClick={()=>{handleCartItems(MatchedRecipe)}}>AddToCart</Button></span>
        <span> <Button variant="outline-success">AddToFavs</Button> </span>
        </div>
        </div>
     
  )
}

export default RecipeDetails
