import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    title: this.props.product.title || '',
    price: this.props.product.price || '',
    quantity: this.props.product.quantity || '',
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggleForm = () => {
    this.props.onToggleForm();
  };

  handleAddNewProduct = (e) => {
    const newProduct = {
      title: this.state.title,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };

    this.props.onAddNewProduct(newProduct);

    this.setState({
      title: '',
      price: '',
      quantity: '',
    });
  };

  handleUpdateProduct = () => {
    const updatedProduct = {
      id: this.props.product.id,
      title: this.state.title,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };

    this.props.onUpdateProduct(updatedProduct);

    this.handleToggleForm();
  };

  render() {
    return (
      <div className='add-form visible'>
        <h3>{this.props.formType} Product</h3>
        <form>
          <div className='input-group'>
            <label htmlFor='product-name'>Product Name</label>
            <input
              type='text'
              id='product-name'
              onChange={this.handleInput}
              name='title'
              value={this.state.title}
            />
          </div>

          <div className='input-group'>
            <label htmlFor='product-price'>Price</label>
            <input
              type='text'
              id='product-price'
              onChange={this.handleInput}
              name='price'
              value={this.state.price}
            />
          </div>

          <div className='input-group'>
            <label htmlFor='product-quantity'>Quantity</label>
            <input
              type='text'
              id='product-quantity'
              onChange={this.handleInput}
              name='quantity'
              value={this.state.quantity}
            />
          </div>

          <div className='actions form-actions'>
            <a
              className='button'
              onClick={
                this.props.formType === 'Add'
                  ? this.handleAddNewProduct
                  : this.handleUpdateProduct
              }
            >
              {this.props.formType === 'Add' ? 'Add' : 'Update'}
            </a>
            <a className='button' onClick={this.handleToggleForm}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
