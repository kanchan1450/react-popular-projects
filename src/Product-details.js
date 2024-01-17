import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => { 
    fetch("https://dummyjson.com/products/"+id)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      <span className="font-bold text-2xl flex flex-wrap justify-center m-4">Product Detail Page</span>
      {product ? (
        <div className= "m-4 p-4 flex flex-wrap rounded-lg  justify-center ">
          <img className=" object-cover h-50 w-100" src={product.thumbnail} alt="Product" />
          <div className="m-4 text-xl font-thin">
          <h3>Category: {product.category}</h3>
          <h3>Product name: {product.title}</h3>
          <h3> Price: $ {product.price}</h3>
          <h3>Brand: {product.brand}</h3>
          <h3>rating: {product.rating} ⭐</h3>
          <p>Description: {product.description}</p>
          </div>
          
        </div>
      ) : (
        // this is not the right way to do loading, create a separate state for this
        // This is temporary solution for breadcrumbs tutorial
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;