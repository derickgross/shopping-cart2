import React from "react";

const EditableProduct = () => (
  <div class="product">
    <div class="product-details">
      <h3>Amazon Kindle E-reader</h3>
      <p class="price">$79.99</p>
      <p class="quantity">5 left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        <a class="button edit">Edit</a>
      </div>
      <a class="delete-button">
        <span>X</span>
      </a>
    </div>
  </div>
);

export default EditableProduct;
