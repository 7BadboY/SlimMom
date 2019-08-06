import React from 'react';
import PropTypes from 'prop-types';

import styles from './EatedProductItem.module.css';
import { ReactComponent as Delete } from '../../../../assets/icons/delete.svg';

const EatedProductItem = ({ productItem }) => {
  return (
    <li className={styles.productWrapper}>
      <p className={styles.product_title}>{productItem.title.ru}</p>
      <p className={styles.product_weight}>
        {productItem.weight}
        <span className={styles}>г</span>
      </p>
      <p className={styles.product_ccal}>
        {productItem.calories}
        <span className={styles}>ккал</span>
      </p>
      <button type="button" onClick={null}>
        <Delete className={styles.delete_btn} />
      </button>
    </li>
  );
};

EatedProductItem.propTypes = {
  productItem: PropTypes.shape({
    title: PropTypes.shape({
      ru: PropTypes.string.isRequired,
      ua: PropTypes.string.isRequired
    }).isRequired,
    weight: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired
  }).isRequired
};

export default EatedProductItem;
