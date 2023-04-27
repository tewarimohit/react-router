import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <div>
      Product Details Page paaram used {`${params.id}`}
      <Link to=".." relative="path">
        back
      </Link>
    </div>
  );
};

export default ProductDetails;
