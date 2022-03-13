import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import "./components/style.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import {data} from "./models/data.json";
import About from "./components/About";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [itemsCountPerPage, setItemsPerPage] = useState([]);
  // const pagination = useRef();
  // const [BasketTotal, setBasketTotal] = useState([]);

  const findProducts = async (value) => {
    const url = `https://itunes.apple.com/search?term= ${value}&limit=30&explicit=no`;

  const results = await fetch(url).then((res) => res.json()); //res is short for result
    if (!results.error) {
      setProducts(results.results);
      console.log("y", results.results);
    }
  };

  const addToBasket = (id) => {
    // console.log("add to basket", id);
    const item = products.find((product) => product.trackId === id);
    // what is in the basket now?
    // add item to what is in the basket now
    // setBaket with an array containing the orig basket items + the new basket item
    // basket.push(item) <- add the new basket item to the array
    let newBasket = basket;
    

    newBasket.push(item);
    // console.log("newBasket", newBasket);

    setBasket(newBasket);
  };

  const removeFromBasket = (id) => {
    console.log(" remove from basket", id);
    let newBasket = basket;
    const result = newBasket.filter((basketItem) => basketItem.trackId !== id);
    setBasket(result);
  };

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <div className="App">
            <header className="App-header">
              <Header />
              <Search findProducts={findProducts} />
              {basket.length > 0 && (
                <p> you have {basket.length} items in the basket</p>
              )}
              <ProductList
                data={products}
                addToBasket={addToBasket}
                products={products}
                stored="library"
                setItemsPerPage={setItemsPerPage}
                itemsCountPerPage={itemsCountPerPage}
              />
            </header>
          </div>
        )}
      />
      <Route exact path="/about" render={() => <About />} />
      <Route
        exact
        path="/basket"
        render={() => (
          <Basket basket={basket} removeFromBasket={removeFromBasket} />

        )}
      />
    </Router>
  );
}

export default App;
