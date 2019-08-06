import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td } from 'react-super-responsive-table';
import styles from './EatedProductItem.module.css';
import { ReactComponent as Delete } from '../../../../assets/icons/delete.svg';

const EatedProductItem = ({ productItem }) => {
  return (
    <Tr className={styles.productWrapper}>
      <Td className={styles.product_title}>{productItem.title.ru}</Td>
      <Td className={styles.product_weight}>
        {productItem.weight}
        <span className={styles.as}>г</span>
      </Td>
      <Td className={styles.product_ccal}>
        {productItem.calories}
        <span className={styles.as}>ккал</span>
      </Td>
      <Td>
        <button type="button" onClick={null} className={styles.but}>
          <Delete className={styles.delete_svg} />
        </button>
      </Td>
    </Tr>
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
