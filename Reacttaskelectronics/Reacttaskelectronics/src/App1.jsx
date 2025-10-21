// import React, { useState, useEffect } from 'react';

// const Products App = () => {
//   const [data, setData] = useState([]);

// }

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         setData(res);
//       });
//   }, []);

//   return (
//     <div>
//           <button>Categories</button>
//         <button>Electronics</button>
//         <button>Fashion</button>
//       <h1>Products</h1>

//       {data.map(product => (
//         <div key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//           <h3>{product.title}</h3>
//           <img src={product.image} alt={product.title} style={{ width: "100px" }} />
//           <p>{product.price} $</p>
//         </div>
//        ))}
//     </div>

//     );

// export default App ;
import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: [
      { id: 101, name: "Laptops", details: "Various brands of laptops." },
      {
        id: 102,
        name: "Smartphones",
        details: "Latest smartphones available.",
      },
    ],
  },
  {
    id: 2,
    name: "Fashion",
    subcategories: [
      { id: 201, name: "Men's Wear", details: "Trending men's fashion." },
      { id: 202, name: "Women's Wear", details: "Stylish outfits for women." },
    ],
  },
];

export default function CategorySubcategoryCards() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [cart, setCart] = useState([]);

  const toggleCategory = (categoryId) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const addToCart = (subcategory) => {
    setCart((prevCart) => [...prevCart, subcategory]);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <div
         
    
          style={{
            width: "30%",
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" 
         }}
        
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Categories
      
          {categories.map((category) => (
            <div
              key={category.id}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderRadius: "4px",
                backgroundColor:
                  expandedCategory === category.id ? "#d1d5db" : "#f3f4f6",
              }}
              onClick={() => toggleCategory(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div
          style={{
            width: "70%",
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
      
            Products
          </h2>
          {expandedCategory !== null ? (
            categories
              .find((category) => category.id === expandedCategory)
              ?.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  style={{
                    padding: "8px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                  }}
                >
                  <div onClick={() => setSelectedSubcategory(sub)}>
                    {sub.name}
                  </div>
                  <button
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => addToCart(sub)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
          ) : (
            <p>Select a category to view products.</p>
          )}
        </div>
      </div>

      {selectedSubcategory && (
        <div
          style={{
            padding: "16px",
            marginTop: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#bfdbfe",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
            {selectedSubcategory.name}
          </h3>
          <p>{selectedSubcategory.details}</p>
        </div>
      )}

      <div
        style={{
          padding: "16px",
          marginTop: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#e5e7eb",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
          Cart ({cart.length} items)
        </h3>
        {cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}
