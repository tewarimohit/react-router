import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>Product Details Page paaram used {`${params.id}`}</div>;
};

export default ProductDetails;
