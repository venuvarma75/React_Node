import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipesData }) => {
  // Add to Cart
  const addToCart = (recipe) => {
    let existingCart = JSON.parse(localStorage.getItem("cartItems21")) || [];
    const alreadyInCart = existingCart.find((item) => item.id === recipe.id);
    if (!alreadyInCart) {
      existingCart.push(recipe);
      localStorage.setItem("cartItems21", JSON.stringify(existingCart));
      alert(`${recipe.name} added to cart ✅`);
    } else {
      alert(`${recipe.name} is already in the cart ❗`);
    }
  };

  // Add to Favorites
  const addToFavs = (recipe) => {
    let existingFavs = JSON.parse(localStorage.getItem("favItems21")) || [];
    const alreadyFav = existingFavs.find((item) => item.id === recipe.id);
    if (!alreadyFav) {
      existingFavs.push(recipe);
      localStorage.setItem("favItems21", JSON.stringify(existingFavs));
      alert(`${recipe.name} added to favorites ❤️`);
    } else {
      alert(`${recipe.name} is already in favorites ❗`);
    }
  };

  if (!recipesData || recipesData.length === 0) {
    return <h3 className="text-center mt-4">No Recipes Found</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">All Recipes</h2>
      <div className="row">
        {recipesData.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card h-100 shadow">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">
                  <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins <br />
                  <strong>Rating:</strong> ⭐ {recipe.rating}
                </p>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary btn-sm me-2">
                  View Details
                </Link>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => addToCart(recipe)}
                >
                  Add to Cart 🛒
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => addToFavs(recipe)}
                >
                  ❤️ Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
