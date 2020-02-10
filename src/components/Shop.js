import React, { Component } from "react";
import Header from "./Header.js";
import ProductsList from "./ProductsList.js";
import productsData from "../lib/products.js";

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
  state = {
    products: [],
    cart: []
  };

  componentDidMount = () => {
    this.setState({
      products: productsData
    });
  };

  onAddToCartClick = clickedProduct => {
    if (
      this.state.cart.find(item => item.productId === clickedProduct.id) ===
      undefined
    ) {
      this.setState({
        cart: [
          ...this.state.cart,
          {
            productId: clickedProduct.id,
            name: clickedProduct.title,
            quantity: 1,
            price: clickedProduct.price
          }
        ]
      });
    } else {
      this.setState({
        cart: this.state.cart.map(item => {
          if (item.productId === clickedProduct.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + clickedProduct.price
            };
          } else {
            return item;
          }
        })
      });
    }

    this.setState({
      products: this.state.products.map(product => {
        if (product.id === clickedProduct.id) {
          return {
            ...product,
            quantity: product.quantity - 1
          };
        } else {
          return product;
        }
      })
    });
  };

  render() {
    return (
      <div id="app">
        <Header cart={this.state.cart} />
        <main>
          <ProductsList
            products={this.state.products}
            onAddToCartClick={this.onAddToCartClick}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
