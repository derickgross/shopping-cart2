import React, { Component } from 'react';
import ProductForm from './ProductForm';

/*
- handlers
	- name input
*/

class TogglableProductForm extends Component {
  state = {
    visible: false,
  }

  handleToggleForm = e => {
    console.log("handleToggleForm");
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
      }
    })
  }

	render () {
		return (
      this.state.visible ? 
        <ProductForm onToggleForm={this.handleToggleForm} onAddNewProduct={this.props.onAddNewProduct}/>
        : 
        <p>
          <a className="button add-product-button" onClick={this.handleToggleForm}>Add A Product</a>
        </p>
)  
	}
};

export default TogglableProductForm;