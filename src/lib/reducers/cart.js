const cart = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_ADDED_TO_CART':
      if (
        state.find(
          (cartItem) => cartItem.id === action.payload.newlyAddedProduct.id,
        ) === undefined
      ) {
        return state.concat({
          id: action.payload.newlyAddedProduct.id,
          title: action.payload.newlyAddedProduct.title,
          price: action.payload.newlyAddedProduct.price,
          quantity: 1,
        });
      } else {
        return state.map((cartItem) => {
          if (cartItem.id === action.payload.newlyAddedProduct.id) {
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
