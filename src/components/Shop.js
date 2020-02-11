import React, { Component } from "react";
import Header from "./Header.js";
import ProductsList from "./ProductsList.js";
import TogglableProductForm from "./TogglableProductForm.js";
import productsData from "../lib/products.js";
import client from "../lib/client.js";

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
    client.get("/api/products").then(data => this.setState({ products: data }));
  };

  handleAddNewProduct = newProduct => {
    return new Promise(resolve => {
      client
        .post("/api/products", newProduct)
        .then(newProduct => {
          // this.forceUpdate();
          this.setState(prevState => ({
            products: prevState.products.concat(newProduct)
          }));

          resolve();
        })
        .catch(error => {
          console.log(error);
        });
    });
  };


  // Refactor this method so it's shorter
  handleAddToCartClick = clickedProduct => {
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
              price: item.price + clickedProduct.price // Update this - should just compute quantity * price
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
            onAddToCartClick={this.handleAddToCartClick}
          />
          <TogglableProductForm onAddNewProduct={this.handleAddNewProduct} />
        </main>
      </div>
    );
  }
}

export default Shop;
