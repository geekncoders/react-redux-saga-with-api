import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/actions/basicAction";
import { productList } from "../redux/actions/productActions";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data)

  useEffect(() => {
    dispatch(productList());
  }, [])
  

  const product = {
    name: "Iphone",
    price: 10000,
    color: "red",
  };

  return (
    <>
      <button
        className="btn btn-outline-primary m-4"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch(removeFromCart(product.name))}
      >
        Remove From Cart
      </button>

      <button
        className="btn btn-outline-danger ml-4"
        onClick={() => dispatch(emptyCart())}
      >
        Empty Cart
      </button>

      
      <button
        className="btn btn-outline-danger ml-4"
        onClick={() => dispatch(productList())}
      >
        Show All Products
      </button>

      {
        data.map((cat) => <div key={cat.id} style={{ backgroundColor: 'black', color: 'white' }}>{cat.id}</div>)
      }  
    </>
  );
};

export default Main;
