import React from "react";
import { createRoot } from "react-dom/client";

const Product = ({ product, onVote  }) => {
  const plus = (name) => {
    onVote("+",name)
  };
  const minus = (name, count) => {
    if(count != 0){
        onVote("-", name)
    }
  };
  return (
    <>
      {product.map((item, index) => (
        <li>
          <span>{item.name}</span> -{" "}
          <span>votes: {item.votes}</span>
          <button onClick={()=>{
            plus(item.name)
          }}>+</button> <button onClick={()=>{
            minus(item.name, item.votes)
          }}>-</button>
        </li>
      ))}
    </>
  );
};

export default Product;
