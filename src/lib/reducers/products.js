const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return action.payload.products;
    case 'PRODUCT_CREATED':
      return state.concat(action.payload.newProduct);
    case 'PRODUCT_UPDATED':
      return state.map((product) => {
        if (product.id === action.payload.updatedProduct.id) {
          return action.payload.updatedProduct;
        }

        return product;
      });
    case 'PRODUCT_DELETED':
      return state.filter((product) => product.id !== action.payload.id);
    case 'PRODUCT_ADDED_TO_CART':
      return state.map((product) => {
        if (product.id === action.payload.newlyAddedProduct.id) {
          return action.payload.newlyAddedProduct;
        }

        return product;
      });
    // return state.map((product) => {
    //   if (product.id === action.payload.product.id) {
    //     return {
    //       ...product,
    //       quantity: product.quantity - 1,
    //     };
    //   } else {
    //     return product;
    //   }
    // });
  }

  return state;
};

export default products;
