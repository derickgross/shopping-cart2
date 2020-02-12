import React, { Component } from "react";
import ProductForm from "./ProductForm.js";

class EditableProduct extends Component {
  state = {
    formOpen: false
  };

  handleToggleForm = () => {
    this.setState(prevState => ({ formOpen: !prevState.formOpen }));
  };

  render() {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.product.title}</h3>
          <p className="price">${this.props.product.price}</p>
          <p className="quantity">
            {this.props.product.quantity} left in stock
          </p>

          {this.state.formOpen ? (
            <ProductForm
              onToggleForm={this.handleToggleForm}
              onAddNewProduct={this.props.onAddNewProduct}
              onUpdateProduct={this.props.onUpdateProduct}
              formType="Edit"
              product={this.props.product}
            />
          ) : (
            <div className="actions product-actions">
              <a
                // className="button add-to-cart"
                className={
                  this.props.product.quantity > 0
                    ? "button add-to-cart"
                    : "button add-to-cart disabled"
                }
                onClick={
                  this.props.product.quantity > 0
                    ? () => this.props.onAddToCartClick(this.props.product)
                    : undefined
                }
              >
                Add to Cart
              </a>
              <a
                className="button edit"
                onClick={() => {
                  this.handleToggleForm();
                }}
              >
                Edit
              </a>
            </div>
          )}

          <a
            className="delete-button"
            onClick={() => this.props.onDeleteProduct(this.props.product.id)}
          >
            <span>X</span>
          </a>
        </div>
      </div>
    );
  }
}

export default EditableProduct;

/*
<ProductForm
  onToggleForm={this.handleToggleForm}
  onAddNewProduct={this.props.onAddNewProduct}
  formType="Add"
/>
*/
