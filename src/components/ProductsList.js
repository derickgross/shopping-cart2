import React from 'react';
import EditableProduct from './EditableProduct.js';
import store from '../lib/store';
import client from '../lib/client';

class ProductsList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    client.get('/api/products').then((data) =>
      store.dispatch({
        type: 'PRODUCTS_RECEIVED',
        payload: {
          products: data,
        },
      }),
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className='product-listing'>
        <h2>Products</h2>

        {store.getState().products.map((product) => (
          <EditableProduct key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
