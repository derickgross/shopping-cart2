import React, { Component } from "react";
import store from '../lib/store';
import client from '../lib/client';

class ProductForm extends Component {
  // Possibly move form pre-population to within componentDidMount

  state = {
    title: this.props.product.title || "",
    price: this.props.product.price || "",
    quantity: this.props.product.quantity || ""
  };

  handleAddNewProduct = newProduct => {

  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleToggleForm = () => {
    this.props.onToggleForm();
  };

  handleAddNewProduct = e => {
    const newProduct = {
      title: this.state.title,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity)
    };

    return new Promise(resolve => {
      client
        .post("/api/products", newProduct)
        .then(newProduct => {
          // this.forceUpdate();

          store.dispatch({
            type: 'PRODUCT_CREATED',
            payload: {
              newProduct: newProduct;
            }
          })

          this.setState({
            title: "",
            price: "",
            quantity: ""
          });

          resolve();
        })
        .catch(error => {
          console.log(error);
        });
    })
  };

  // handleUpdateProduct = e => {
  //   this.props
  //     .onUpdateProduct({
  //       id: this.props.product.id,
  //       title: this.state.title,
  //       price: Number(this.state.price),
  //       quantity: Number(this.state.quantity)
  //     })
  //     .then(this.handleToggleForm());
  // };

  render() {
    return (
      <div className="add-form visible">
        <h3>{this.props.formType} Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              onChange={this.handleInput}
              name="title"
              value={this.state.title}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              onChange={this.handleInput}
              name="price"
              value={this.state.price}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              onChange={this.handleInput}
              name="quantity"
              value={this.state.quantity}
            />
          </div>

          <div className="actions form-actions">
            <a
              className="button"
              onClick={
                this.props.formType === "Add"
                  ? this.handleAddNewProduct
                  : this.handleUpdateProduct
              }
            >
              {this.props.formType === "Add" ? "Add" : "Update"}
            </a>
            <a className="button" onClick={this.handleToggleForm}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
