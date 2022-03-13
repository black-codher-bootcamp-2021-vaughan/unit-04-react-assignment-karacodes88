import React, { useState } from "react";

const BasketTotal = ({ items }) => {
  // save a const with the total cost
  // items.map(item => item.price)
  // an array with all the numbers for the prices
  // sum all the item prices
  let totalPrice = 0;
  console.log("----items", items);

  items.map((item) => {
    console.log(item.trackPrice);
    console.log(totalPrice);

    return (totalPrice = totalPrice + item.trackPrice);
  });

  return <div></div>;
};

export default BasketTotal;