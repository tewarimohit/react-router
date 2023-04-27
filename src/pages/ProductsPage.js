import React from "react";
import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", name: "Product 1", price: 80 },
  { id: "p2", name: "Product 2", price: 800 },
  { id: "p3", name: "Product 3", price: 8000 },
];

const ProductsPage = () => {
  return (
    <div>
      <h1>This is my Products Page</h1>
      {PRODUCTS.map((article, index) => (
        <li key={index}>
          <Link to={`${article.id}`}>
            {article.name}
            <span>{article.price}</span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default ProductsPage;
