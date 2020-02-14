import React, { Component } from 'react';
import ProductFormContainer from './ProductFormContainer';

/*
- handlers
	- name input
*/

class TogglableProductForm extends Component {
  state = {
    visible: false,
  };

  handleToggleForm = (e) => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  };

  render() {
    return this.state.visible ? (
      <ProductFormContainer
        onToggleForm={this.handleToggleForm}
        formType='Add'
        product={{}}
      />
    ) : (
      <p>
        <a
          className='button add-product-button'
          onClick={this.handleToggleForm}
        >
          Add A Product
        </a>
      </p>
    );
  }
}

export default TogglableProductForm;
