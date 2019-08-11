import React from 'react';
// import PropTypes from 'prop-types';
import { useWindowSize, useOrientation } from 'react-use';
import Selector from './ProductSelector/ProductSelector';
import styles from './AddNewProduct.module.css';
import { Add } from '../../../assets/icons';

const AddNewProduct = () => {
  const { width } = useWindowSize();
  const state = useOrientation();
  const isLandscape = state.type.includes('landscape');

  const selecorHr = width < 767 && !isLandscape ? '100%' : '231px';
  return (
    <div className={styles.addProduct_wrapper}>
      <div className={styles.selectorWrapper}>
        <Selector />
        <hr
          className={styles.afterSelector_hr}
          align="left"
          noshade="true"
          color="#e5e5e5"
          size="1"
          width={selecorHr}
        />
      </div>
      <div className={styles.inputWrapper}>
        <input type="number" placeholder="Граммы" step={10} className={styles.inputProduct_weight} />
        <hr className={styles.afterWeight_hr} align="left" noshade="true" color="#e5e5e5" size="1" width="100%" />
      </div>

      <button onClick={null} type="button" className={styles.add_btn}>
        {width < 767 && !isLandscape ? 'Добавить' : <Add className={styles.addBtn_icon} />}
      </button>
    </div>
  );
};

export default AddNewProduct;
