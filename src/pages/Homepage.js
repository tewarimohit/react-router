import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      <h1>This is my Homepage</h1>

      <Link to="/products">Go to product page</Link>
      <button onClick={navigateHandler}>Go to product</button>
    </div>
  );
};

export default Homepage;
