import React from "react";

const Cart = props => (
  <div className="cart">
    <h2>Your Cart</h2>
    {props.cart.length === 0 ? (
      <div>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
      </div>
    ) : (
      <table class="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>

        {props.cart.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
          </tr>
        ))}

        <tr>
          <td colspan="3" class="total">
            Total: ${props.cart.reduce((total, item) => total + item.price, 0)}
          </td>
        </tr>
      </table>
    )}
    <a className="button checkout disabled">Checkout</a>
  </div>
);

export default Cart;
