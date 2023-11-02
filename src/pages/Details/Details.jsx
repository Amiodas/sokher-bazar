import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const Details = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const products = useLoaderData();
  const id = useParams();

  useEffect(() => {
    const productDetails = products?.find(
      (prod) => prod.id === parseInt(id.id)
    );
    setProduct(productDetails);
    setLoading(false);
  }, [products, id]);

  console.log(product);
  return (
    <div>
      <h3>Details</h3>
      <div>
        {loading ? (
          "Loading"
        ) : (
          <div>
            <p>Image: {product?.image}</p>
            <p>Name: {product?.name}</p>
            <p>Price: ${product?.price}</p>
            <p>Description: {product?.description}</p>
            <p>Discount: {product?.discount} %</p>
            <p>In Stock: {product?.inStock} pieces</p>
            <p>Is Favorite: {product?.isFavorite ? "Yes" : "No"}</p>
            <p>Brand: {product?.brand}</p>
            <p>Color: {product?.color}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
