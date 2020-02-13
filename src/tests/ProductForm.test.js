import React from 'react';
import { shallow } from 'enzyme';
import ProductForm from '../components/ProductForm.js';

describe('ProductForm', () => {
  let addWrapper;
  let editWrapper;

  beforeEach(() => {
    addWrapper = shallow(<ProductForm product={{}} formType="Add" />);
    // editWrapper = shallow(<ProductForm product={{ add properties here }} formType="Edit" />);
  });

  it('renders the form inputs properly', () => {
    expect(addWrapper.find('#product-name').length).toEqual(1);
    expect(addWrapper.find('#product-price').length).toEqual(1);
    expect(addWrapper.find('#product-quantity').length).toEqual(1);  
  });

  it('renders add form title correctly', () => {
    expect(addWrapper.find('h3').text()).toEqual('Add Product');    
  });

  it('renders add and cancel buttons for add form', () => {
    expect(addWrapper.find('.button').length).toEqual(2);
    expect(addWrapper.find('.button').at(0).text()).toEqual('Add');
    expect(addWrapper.find('.button').at(1).text()).toEqual('Cancel');    
  });

  describe('user populates form inputs', () => {
    let nameInput;
    let nameValue = 'Samsung 3';

    beforeEach(() => {
      nameInput = addWrapper.find('#product-name');

      nameInput.simulate('change', {
        target: { value: nameValue }
      });

    });

    describe('name input', () => {

      it('responds to change event by updating state', () => {

      });
    });


    // describe('user submits form', () => {

    //     it('calls handleAddNewProduct on submit', () => {
    //       const wrapper = shallow(<ProductForm formType="Add" />);
    //       const newProduct = {
    //         title: "test product",
    //         price: 10.00,
    //         quantity: 1
    //       };

    //       wrapper.simulate('submit', {})

    //       // expect(wrapper.find('h1').text()).toEqual('Welcome!');
    //     });

    // });

  });




});