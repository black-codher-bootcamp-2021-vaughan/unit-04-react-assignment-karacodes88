import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="header">
      <h1>About</h1>
      <div className="breadcrumb">
        <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
        <Link to="/basket" className="productLink">
          ProductList ({props.bookLength})
        </Link>
      </div>
      <div className="page">
        <h1>
          {" "}
          Do you want to watch your favourite programs? Or listen to some music? 
          welcome to the Media Store.{" "}
        </h1>
      </div>
    </div>
  );
};

export default About;
