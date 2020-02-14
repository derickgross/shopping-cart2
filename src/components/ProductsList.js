import React from 'react';
import EditableProductContainer from './EditableProductContainer';

class ProductsList extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <div className='product-listing'>
        <h2>Products</h2>

        {this.props.products.map((product) => (
          <EditableProductContainer key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
