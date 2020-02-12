import React from "react";
import Cart from "./Cart.js";

const Header = props => (
  <header>
    <h1>The Shop!</h1>
    <Cart cart={props.cart} />
  </header>
);

export default Header;