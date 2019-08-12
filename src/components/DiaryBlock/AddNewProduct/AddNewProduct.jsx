import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import Selector from './ProductSelector/ProductSelector';
import styles from './AddNewProduct.module.css';
import { Add } from '../../../assets/icons';

const AddNewProduct = () => {
  const { width, height } = useWindowSize();
  const isLandscape = width > height;
  const [inputWeight, setInputWeight] = useState('');

  const handlerInputWeight = e => {
    if (inputWeight === '') {
      setInputWeight(100);
    } else if (inputWeight !== '' && e.target !== undefined) {
      setInputWeight(e.target.value);
    }
  };

  const selecorHr = width < 767 && !isLandscape ? '100%' : '231px';
  return (
    <div className={styles.addProduct_wrapper}>
      <div className={styles.selectorWrapper}>
        <Selector handlerInputWeight={handlerInputWeight} />
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
        <input
          type="number"
          placeholder="Граммы"
          step={10}
          className={styles.inputProduct_weight}
          value={inputWeight}
          onChange={handlerInputWeight}
          onClick={handlerInputWeight}
        />
        <hr className={styles.afterWeight_hr} align="left" noshade="true" color="#e5e5e5" size="1" width="100%" />
      </div>

      <button onClick={null} type="button" className={styles.add_btn}>
        {width < 767 && !isLandscape ? 'Добавить' : <Add className={styles.addBtn_icon} />}
      </button>
    </div>
  );
};

export default AddNewProduct;
