import React from 'react';

const Cart = (props) => (
  <div className='cart'>
    <h2>Your Cart</h2>
    {props.cart.length === 0 ? (
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

        {props.cart.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}

        <tr>
          <td colspan='3' className='total'>
            Total: $
            {props.cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </td>
        </tr>
      </table>
    )}
    <a
      className={
        props.cart.length > 0 ? 'button checkout' : 'button checkout disabled'
      }
      onClick={props.onCheckout}
    >
      Checkout
    </a>
  </div>
);

export default Cart;
