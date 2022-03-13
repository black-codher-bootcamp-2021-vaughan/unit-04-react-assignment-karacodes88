import React, { useState } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

ProductList.propTypes = {
  product: PropTypes.array
};

export default function ProductList({ data, addToBasket }) {
  console.log("data", data);
  return (
    <div>
      {data.map((product) => (
        <Product
          key={product.trackId}
          product={product}
          addToBasket={addToBasket}
          ProductList
        />
      ))}
    </div>
  );
}