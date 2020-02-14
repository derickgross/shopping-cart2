import React, { Component } from 'react';
import ProductForm from './ProductForm.js';
import store from '../lib/store';
import client from '../lib/client';

class EditableProduct extends Component {
  state = {
    formOpen: false,
  };

  handleDeleteProduct = (id) => {
    return new Promise((resolve) => {
      client
        .delete(`/api/products/${id}`)

        .then(() => {
          store.dispatch({
            type: 'PRODUCT_DELETED',
            payload: {
              id: id,
            },
          });

          resolve();
        })

        .catch((error) => {
          console.log(error);
        });
    });
  };

  handleAddToCartClick = (clickedProduct) => {
    store.dispatch({
      type: 'PRODUCT_ADDED_TO_CART',
      payload: {
        product: clickedProduct,
      },
    });
  };

  handleToggleForm = () => {
    this.setState((prevState) => ({ formOpen: !prevState.formOpen }));
  };

  render() {
    return (
      <div className='product'>
        <div className='product-details'>
          <h3>{this.props.product.title}</h3>
          <p className='price'>${this.props.product.price}</p>
          <p
            className={
              this.props.product.quantity > 0
                ? 'quantity'
                : 'quantity none-left'
            }
          >
            {this.props.product.quantity} left in stock
          </p>

          {this.state.formOpen ? (
            <ProductForm
              onToggleForm={this.handleToggleForm}
              formType='Edit'
              product={this.props.product}
            />
          ) : (
            <div className='actions product-actions'>
              <a
                className={
                  this.props.product.quantity > 0
                    ? 'button add-to-cart'
                    : 'button add-to-cart disabled'
                }
                onClick={
                  this.props.product.quantity > 0
                    ? () => this.handleAddToCartClick(this.props.product)
                    : undefined
                }
              >
                Add to Cart
              </a>
              <a
                className='button edit'
                onClick={() => {
                  this.handleToggleForm();
                }}
              >
                Edit
              </a>
            </div>
          )}

          <a
            className='delete-button'
            onClick={() => this.handleDeleteProduct(this.props.product.id)}
          >
            <span>X</span>
          </a>
        </div>
      </div>
    );
  }
}

export default EditableProduct;
