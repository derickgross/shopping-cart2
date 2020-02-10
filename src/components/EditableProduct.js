import React from "react";

const EditableProduct = props => (
  <div className="product">
    <div className="product-details">
      <h3>{props.product.title}</h3>
      <p className="price">${props.product.price}</p>
      <p className="quantity">{props.product.quantity} left in stock</p>
      <div className="actions product-actions">
        <a
          className="button add-to-cart"
          onClick={() => props.onAddToCartClick(props.product)}
        >
          Add to Cart
        </a>
        <a className="button edit">Edit</a>
      </div>
      <a className="delete-button">
        <span>X</span>
      </a>
    </div>
  </div>
);

export default EditableProduct;
