import React, { useState } from 'react';
// import './A.css';

const Container = () => {
  const [state, setState] = useState([]);
  const [addCard, setAddCard] = useState([]);

  const Electronics = [{ products: ['SmartPhones', 'SmartLaptops', 'SmartWatches'] }];
  const FancyItems = [{ products: ["Men's Wear", "Women's Wear", 'SummerDress'] }];
  const Recipes = [{ products: ['Chicken', 'Biryani', 'Fish'] }];

  const handlerClick = () => {
    setState(Electronics[0].products);
  };

  const handlerClick1 = () => {
    setState(FancyItems[0].products);
  };

  const handlerClick2 = () => {
    setState(Recipes[0].products);
  };

  const handlerAddCard = (item) => {
    setAddCard((prev) => [...prev, item]);
  };

  return (
    <div>
      <div className='main'>
        <div className='div1'>
          <h1>Categories</h1>
          <button onClick={handlerClick}>Electronics</button>
          <button onClick={handlerClick1}>Fancy Items</button>
          <button onClick={handlerClick2}>Recipe Items</button>
        </div>

        <div className='div2'>
          <h1>Products</h1>
          {state.length > 0 ? (
            state.map((x, index) => (
              <div key={index} className="product">
                <span>{x}</span>
                <button onClick={() => handlerAddCard(x)}>AddCard</button>
              </div>
            ))
          ) : (
            <p>Please Select the Item</p>
          )}
        </div>
      </div>

      <div className='div3'>
        <h1>CardItems</h1>
        {addCard.length > 0 ? (
          addCard.map((x, index) => (
            <p key={index} className="card">{x}</p>
          ))
        ) : (
          <p>No Card Details Available</p>
        )}
      </div>
    </div>
  );
};

export default Container;