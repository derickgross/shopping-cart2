import { connect } from 'react-redux';
import EditableProduct from './EditableProduct.js';
import client from '../lib/client';

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteProduct: (id) => {
      return new Promise((resolve) => {
        client
          .delete(`/api/products/${id}`)

          .then(() => {
            dispatch({
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
    },

    handleAddToCartClick: (clickedProduct) => {
      console.log('hi');
      return new Promise((resolve) => {
        client
          .put(`/api/products/${clickedProduct.id}`, {
            ...clickedProduct,
            quantity: clickedProduct.quantity - 1,
          })
          .then((newlyAddedProduct) => {
            // dispatch({
            //   type: 'PRODUCT_UPDATED',
            //   payload: {
            //     updatedProduct,
            //   },
            // });

            dispatch({
              type: 'PRODUCT_ADDED_TO_CART',
              payload: {
                newlyAddedProduct,
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

export default connect(null, mapDispatchToProps)(EditableProduct);
