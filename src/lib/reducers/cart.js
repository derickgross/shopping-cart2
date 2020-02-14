const cart = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_ADDED_TO_CART':
      if (
        state.find((cartItem) => cartItem.id === action.payload.product.id) ===
        undefined
      ) {
        return state.concat({
          id: action.payload.product.id,
          title: action.payload.product.title,
          price: action.payload.product.price,
          quantity: 1,
        });
      } else {
        return state.map((cartItem) => {
          if (cartItem.id === action.payload.product.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          } else {
            return cartItem;
          }
        });
      }
    case 'CHECKOUT':
      return [];
  }

  return state;
};

export default cart;
