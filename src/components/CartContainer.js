import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckout: () => {
      dispatch({
        type: 'CHECKOUT',
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
