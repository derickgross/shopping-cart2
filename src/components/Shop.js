import React, { Component } from 'react';
import Header from './Header.js';
import ProductsList from './ProductsList.js';
import TogglableProductForm from './TogglableProductForm.js';
import client from '../lib/client.js';

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
      <ProductsList />
      <TogglableProductForm />
    </main>
  </div>
);

export default Shop;
