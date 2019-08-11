/* eslint-disable no-nested-ternary */
import React, { useCallback } from 'react';
import chroma from 'chroma-js';
import {
  //  useSelector,
  useDispatch
} from 'react-redux';
import AsyncSelect from 'react-select/async';
// import PropTypes from 'prop-types';
// import products from './products';
// import axios from 'axios';
import {
  handlerSelectedProductAction
  //  getAllProductsAction
} from '../../../../redux/actions/productActions';
import { fetchAllProducts } from '../../../../utils/requests';

const colourStyles = {
  container: styles => ({
    ...styles,
    borderBottom: '1px var(--input-line-color) solid',
    padding: '15px 0 0',
    marginBottom: '15px'
  }),
  control: styles => ({
    ...styles,
    border: 'none'
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : '#800';
    return {
      ...styles,
      backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
      }
    };
  },
  input: styles => ({ ...styles, margin: '0' }),
  placeholder: styles => ({ ...styles }),
  valueContainer: styles => ({ ...styles, padding: '0' }),
  singleValue: styles => ({
    ...styles,
    padding: '0 0 0 5px',
    fontSize: '13px',
    fontFamily: 'Verdana',
    color: 'var(--text-color-grey)',
    margin: '0',
    fontWeight: 700
  })
};

const SelectWrapper = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('userToken');
  // const getAllProducts = useCallback(() => dispatch(getAllProductsAction), [dispatch]);

  const fetchProducts = async input => {
    try {
      const productsOptions = await fetchAllProducts(token, input);
      return productsOptions;
    } catch (err) {
      return console.log(err);
    }
  };

  const PromiseTestValue = async input => {
    const productsFromDB = await fetchProducts(input);
    console.log(`asdasd`, { productsFromDB });
    return productsFromDB;
  };

  // useEffect(() => {
  //    // setAllProd(token);
  // }, [])

  const defaultValue = {
    value: 'Placeholder',
    label: 'Введите название продукта',
    color: '#999daa',
    isFixed: true,
    isDisabled: true
  };

  const handlerSelectedProduct = useCallback(e => dispatch(handlerSelectedProductAction(e)), [dispatch]);

  // const productsSTORE = useSelector(state => state.dailyBlock.allProducts);

  return (
    <AsyncSelect
      defaultValue={defaultValue}
      onChange={handlerSelectedProduct}
      cacheOptions
      defaultOptions
      label="Single select"
      loadOptions={PromiseTestValue}
      styles={colourStyles}
      noOptionsMessage={() => 'Ничего не найдено'}
      components={{ IndicatorsContainer: () => null }}
    />
  );
};
SelectWrapper.propTypes = {};

export default SelectWrapper;
