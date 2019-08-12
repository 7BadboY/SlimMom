import React from 'react';
import chroma from 'chroma-js';
import AsyncSelect from 'react-select/async';
import { useWindowSize } from 'react-use';
import PropTypes from 'prop-types';

import { fetchAllProducts } from '../../../../utils/requests';

const colourStyles = () => {
  const { width, height } = useWindowSize();
  const isLandscape = width > height;
  return {
    container: styles => ({
      ...styles,
      margin: width < 768 && !isLandscape ? '0 0 2px' : '0 0 7px',
      width: width < 768 && !isLandscape ? '100%' : '260px'
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
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
        }
      };
    },
    Input: styles => ({
      ...styles,
      margin: '0',
      fontFamily: 'Verdana',
      lineHeight: 1.2,
      fontSize: width < 768 && !isLandscape ? '13px' : '15px',
      padding: '0 0 0 5px',
      color: 'var(--text-color-black)'
    }),
    placeholder: styles => ({ ...styles }),
    valueContainer: styles => ({ ...styles, padding: '0' }),
    singleValue: styles => ({
      ...styles,
      padding: width < 768 && !isLandscape ? '0 0 0 5px' : '0',
      fontSize: width < 768 && !isLandscape ? '13px' : '15px',
      fontFamily: 'Verdana',
      lineHeight: 1.2,
      color: 'var(--text-color-grey)',
      margin: '0',
      fontWeight: 700
    })
  };
};

const SelectWrapper = ({ handlerInputWeight, handlerProductSelect }) => {
  const token = localStorage.getItem('userToken');
  console.log({ token });

  const fetchProducts = async input => {
    try {
      const productsOptions = await fetchAllProducts(token, input);
      return productsOptions;
    } catch (err) {
      return console.log(err);
    }
  };

  const PromiseOptions = async input => {
    const productsFromDB = await fetchProducts(input);
    console.log(`productsFromDB: `, { productsFromDB });
    return productsFromDB;
  };

  const defaultValue = {
    value: 'Placeholder',
    label: 'Введите название продукта',
    color: '#999daa',
    isFixed: true,
    isDisabled: true
  };

  return (
    <AsyncSelect
      defaultValue={defaultValue}
      onChange={e => {
        handlerProductSelect(e);
        handlerInputWeight(e);
      }}
      cacheOptions
      defaultOptions
      // label="Single select"
      loadOptions={PromiseOptions}
      styles={colourStyles()}
      noOptionsMessage={() => 'Ничего не найдено'}
      components={{ IndicatorsContainer: () => null }}
    />
  );
};

SelectWrapper.propTypes = {
  handlerInputWeight: PropTypes.func.isRequired,
  handlerProductSelect: PropTypes.func.isRequired
};

export default SelectWrapper;
