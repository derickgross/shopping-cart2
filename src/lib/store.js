import { createStore } from 'redux';
import products from './reducers/products'

const store = createStore(products);

default export store;