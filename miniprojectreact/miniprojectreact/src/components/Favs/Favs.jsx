import React, { useEffect, useState } from "react";

const Favs = () => {
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("favItems21")) || [];
    setFavItems(items);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Favorites ❤️</h2>
      {favItems.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="row">
          {favItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <strong>Cuisine:</strong> {item.cuisine} <br />
                    <strong>Rating:</strong> ⭐ {item.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
