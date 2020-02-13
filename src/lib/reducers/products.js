

const products = (state=[], action) => {
  switch(action.type) {
    case 'PRODUCT_CREATED':
      return state.concat(action.payload.newProduct);
    case 'PRODUCT_UPDATED':
      return state.map(product => {
        if (product.id === action.payload.updatedProduct.id) {
          return action.payload.updatedProduct;
        }

        return product;
      })
    case 'PRODUCT_DELETED':
      return state.filter(product => product.id !== action.payload.id);
  }

  return state;
};

export default products;

// const comments = (state=[], action) => {
//   switch(action.type) {
//     case 'COMMENTS_RECEIVED':
//       const commentsWithoutReplies = action.payload.comments.reduce((accumulator, comment) => {
//         const { replies, ...commentWithoutReplies } = comment;

//         return accumulator.concat(commentWithoutReplies);
//       }, []);

//       return state.concat(commentsWithoutReplies);

//     case 'COMMENT_CREATED':
//       return state.concat(action.payload.comment);
//   }

//   return state;
// };

// export default comments;