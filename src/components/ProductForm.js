import React, { Component } from 'react'

class ProductForm extends Component {
	state = {
    name: '',
    price: '',
    quantity: '',
  }

  constructor(props) {
    super(props);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleToggleForm = (e) => {
    this.props.onToggleForm(e);
  }

  handleAddNewProduct = (e) => {
    this.props.onAddNewProduct({
      title: this.state.name,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    });
  }

  render() {
    return (
      <div className="add-form visible">
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" onChange={this.handleInput} name="name" value={this.state.name} />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" onChange={this.handleInput} name="price" value={this.state.price} />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" onChange={this.handleInput} name="quantity" value={this.state.quantity} />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleAddNewProduct}>Add</a>
            <a className="button" onClick={this.handleToggleForm}>Cancel</a>
          </div>
        </form>
      </div>
    )
  }

}

export default ProductForm;