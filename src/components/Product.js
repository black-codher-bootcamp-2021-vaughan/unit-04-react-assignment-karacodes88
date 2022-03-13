import React from "react";

export default function Product(props) {
  // console.log("props", props);

  // console.log("artistName", props.product.artistName);

  return (
    <div className = "product">
      <h2>{props.product.artistName}</h2>
    <div className = "song">  
      <p>{props.product.kind}</p></div>
    <div className = "track">  
      <p>{props.product.trackName}</p></div>
    <div className = "price">  
      <p>{props.product.trackPrice}</p></div>
    <div className ="image">
      <img src={props.product.artworkUrl100} alt="thumbnail" /></div>
    <div className ="description">  
      <p>{props.product.longDescription}</p></div>
    <div className ="button">    
      <button onClick={() => props.addToBasket(props.product.trackId)}>
        add to basket
      </button></div>
    </div>
  );
}

