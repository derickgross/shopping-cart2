import React from 'react';
import Header from './Header.js';
import ProductsListContainer from './ProductsListContainer.js';
import TogglableProductForm from './TogglableProductForm.js';

/*
Shop
  Header
    Cart
  ProductsList
    EditableProduct
      ProductForm
  TogglableProductForm
    AddProductButton
    ProductForm
*/

const Shop = () => (
  <div id='app'>
    <Header />
    <main>
      <ProductsListContainer />
      <TogglableProductForm />
    </main>
  </div>
);

export default Shop;
