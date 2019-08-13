import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useDispatch } from 'react-redux';
import Selector from './ProductSelector/ProductSelector';
import styles from './AddNewProduct.module.css';
import { Add } from '../../../assets/icons';
import { addProductByDayAction } from '../../../redux/actions/productActions';

const AddNewProduct = () => {
  const { width, height } = useWindowSize();
  const isLandscape = width > height;
  const [productWeight, setProductWeight] = useState('');
  const [productId, setProductId] = useState('');
  const [productLabel, setProductLabel] = useState('');

  const dispatch = useDispatch();

  const handlerInputWeight = value => {
    setProductWeight(value);
  };

  const handlerProductSelect = e => {
    setProductId(e.value);
    setProductLabel(e.label);
  };

  const handlerAddButton = () => {
    if (productWeight !== '' && productId !== '') {
      const addUserEatedProduct = (token, id, weight) => dispatch(addProductByDayAction(token, id, weight));
      const weight = Number(productWeight);
      const token = localStorage.getItem('userToken');
      addUserEatedProduct(token, productId, weight);
      setProductWeight('');
      setProductId('');
    }
  };

  const selecorHrWidth = width < 767 && !isLandscape ? '100%' : '231px';
  //   Знаю что Hr не то, лень сейчас переделывать ;(
  //   Переделаю на бордеры инпутов ну или в дивы что б пиксель перфект (ну надо так 😎)
  return (
    <div className={styles.addProduct_wrapper}>
      <div className={styles.selectorWrapper}>
        <Selector
          handlerInputWeight={handlerInputWeight}
          handlerProductSelect={handlerProductSelect}
          productLabel={productLabel}
        />
        <hr
          className={styles.afterSelector_hr}
          align="left"
          noshade="true"
          color="#e5e5e5"
          size="1"
          width={selecorHrWidth}
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="number"
          placeholder="Граммы"
          step={10}
          className={styles.inputProduct_weight}
          value={productWeight}
          onChange={e => handlerInputWeight(e.target.value)}
        />
        <hr className={styles.afterWeight_hr} align="left" noshade="true" color="#e5e5e5" size="1" width="100%" />
      </div>

      <button onClick={handlerAddButton} type="button" className={styles.add_btn}>
        {width < 767 && !isLandscape ? 'Добавить' : <Add className={styles.addBtn_icon} />}
      </button>
    </div>
  );
};
export default AddNewProduct;
