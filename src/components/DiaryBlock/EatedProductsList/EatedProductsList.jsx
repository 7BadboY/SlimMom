import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';
import { deleteProductFromProductListAC } from '../../../redux/actions/productActions';

import EatedProductItem from './EatedProductItem/EatedProductItem';

const EatedProductsList = ({ productsByDay, isProductsByDayLoader, deleteProduct }) => {
  useEffect(() => {
    // console.log(221424);
    // console.log({ isProductsByDayLoader });
  });

  return (
    <>
      {productsByDay.length === 0 && <p>Вы ничего не ели! Обязательно перекусите!!!</p>}
      {isProductsByDayLoader && (
        <div className={styles.fetch_loader}>
          <Spinner
            name="pacman"
            style={{
              color: 'red',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>
      )}

      {!isProductsByDayLoader && (
        <Table className={styles.firstBlock}>
          <Tbody>
            {productsByDay.map(el => {
              return <EatedProductItem productItem={el} key={el._id} deleteProduct={deleteProduct} />;
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isProductsByDayLoader: state.dailyBlock.isProductsByDayLoader,
  productsByDay: state.dailyBlock.productsByDay
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => {
    dispatch(deleteProductFromProductListAC(id));
  }
});
// follow: userId => {
//       dispatch(followAC(userId));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);

EatedProductsList.propTypes = {
  productsByDay: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isProductsByDayLoader: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired
};
