import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import client from '../lib/client';

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => {
      client.get('/api/products').then((data) => {
        dispatch({
          type: 'PRODUCTS_RECEIVED',
          payload: {
            products: data,
          },
        });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
