import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import client from '../lib/client';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewProduct: (newProduct) => {
      return new Promise((resolve) => {
        client
          .post('/api/products', newProduct)
          .then((newProduct) => {
            dispatch({
              type: 'PRODUCT_CREATED',
              payload: {
                newProduct: newProduct,
              },
            });

            resolve();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    onUpdateProduct: (updatedProduct) => {
      return new Promise((resolve) => {
        client
          .put(`/api/products/${updatedProduct.id}`, updatedProduct)
          .then((updatedProduct) => {
            dispatch({
              type: 'PRODUCT_UPDATED',
              payload: {
                updatedProduct: updatedProduct,
              },
            });

            resolve();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductForm);
