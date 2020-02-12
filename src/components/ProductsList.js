import React from "react";
import EditableProduct from "./EditableProduct.js";

const ProductsList = props => (
  <div className="product-listing">
    <h2>Products</h2>

    {props.products.map(product => (
      <EditableProduct
        key={product.id}
        product={product}
        onAddToCartClick={props.onAddToCartClick}
        onUpdateProduct={props.onUpdateProduct}
        onDeleteProduct={props.onDeleteProduct}
      />
    ))}
  </div>
);

export default ProductsList;
