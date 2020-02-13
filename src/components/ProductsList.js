import React from "react";
import EditableProduct from "./EditableProduct.js";
import store from '../lib/store';
import client from '../lib/client';

class ProductsList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    client.get("/api/products")
      .then(data => store.dispatch({
        type: 'PRODUCTS_RECEIVED',
        payload: {
          products: data,
        },
      }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>

        {store.getState().map(product => (
          <EditableProduct
            key={product.id}
            product={product}
            onAddToCartClick={this.props.onAddToCartClick}
          />
        ))}
      </div>
    );
  }
} 

export default ProductsList;

// class CommentsList extends React.Component  {
//   componentDidMount = () => {
//     this.unsubscribe = store.subscribe(() => {
//       this.forceUpdate();
//     });

//     fetch('/api/comments')
//       .then((response) => {
//         return response.json();
//       })
//       .then((commentsData) => {
//         // this.setState({ comments: commentsData })
//         store.dispatch({
//           type: 'COMMENTS_RECEIVED',
//           payload: {
//             comments: commentsData
//           },
//         });
//       })
//       .catch((err) => { console.log(err) });
//   }

//   componentWillUnmount = () => {
//     this.unsubscribe();
//   }

//   render() {
//     return (
//     <div className="comments">
//       <h2>Comments (2)</h2>
//       {store.getState().comments.map(comment => <CommentsParent key={comment.id} comment={comment} />)}
//     </div>
//   )};
// };

// export default CommentsList;