import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";
import Header from "./Header";

//   let newBasketItem = basket;
//   newBasketItem.push( item );
//   setBasket( newBasketItem );

// You could use Basket.length inside  Basket.js  to work out the total. Then pass it to the Basket Counter to display it.

const Basket = (props) => {
  const items = props.basket;
  console.log("items", items.length);
  return (
    <div>
      <Header />
      {items.length > 0 && (
        <div>
          <BasketCount total={items.length} />
          <BasketTotal items={props.basket} />
        </div>
      )}

      {items.length > 0 ? (
        props.basket.map((item) => (
          <div>
            {/* {console.log("item", item)} */}
            <h2>{item.artistName}</h2>
            <p>{item.trackName}</p>
            <p>{item.trackPrice}</p>
            <img src={item.artworkUrl100} alt="thumbnail" />
            <p>{item.longDescription}</p>

            <button onClick={() => props.removeFromBasket(item.trackId)}>
              remove from basket
            </button>
          </div>
        ))
      ) : (
        <div> No items found</div>
      )}
    </div>
  );
};

export default Basket;




