import React from 'react';
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();



  return (
    <div>
      <h1>Products Details Page</h1>
      <p>{params.productId}</p>
    </div>
  )
}

export default ProductsDetails
