import React from "react";
import EditableProduct from "./EditableProduct.js";

const ProductsList = () => (
  <div class="product-listing">
    <h2>Products</h2>

    <EditableProduct />
    <EditableProduct />
    <EditableProduct />
  </div>
);

export default ProductsList;
