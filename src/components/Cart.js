import React, { Component } from 'react';
import store from '../lib/store';

class Cart extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleCheckout = () => {
    store.dispatch({
      type: 'CHECKOUT',
    });
  };

  render() {
    return (
      <div className='cart'>
        <h2>Your Cart</h2>
        {store.getState().cart.length === 0 ? (
          <div>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
          </div>
        ) : (
          <table className='cart-items'>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>

            {store.getState().cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}

            <tr>
              <td colspan='3' className='total'>
                Total: $
                {store
                  .getState()
                  .cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </table>
        )}
        <a
          className={
            store.getState().cart.length > 0
              ? 'button checkout'
              : 'button checkout disabled'
          }
          onClick={this.handleCheckout}
        >
          Checkout
        </a>
      </div>
    );
  }
}

export default Cart;
