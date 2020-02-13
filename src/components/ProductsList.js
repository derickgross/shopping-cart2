import React from "react";
import EditableProduct from "./EditableProduct.js";
import store from '../lib/store';

class ProductsList {
  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>

        {store.getState().map(product => (
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
  }
} 

export default ProductsList;
