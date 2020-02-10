import React, { Component } from "react";
import Header from "./Header.js";
import ProductsList from "./ProductsList.js";

/*
Shop
  Header
    Cart
  ProductsList
    EditableProduct
      ProductForm
  TogglableProductForm
    AddProductButton
    ProductForm
*/

class Shop extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <ProductsList />
        </main>
      </div>
    );
  }
}

export default Shop;
