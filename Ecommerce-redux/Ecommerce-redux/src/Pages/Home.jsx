import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="container mt-4">
      <h2>All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
