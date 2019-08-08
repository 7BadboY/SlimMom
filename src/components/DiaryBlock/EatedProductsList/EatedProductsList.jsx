import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';

import EatedProductItem from './EatedProductItem/EatedProductItem';

const EatedProductsList = ({ productsByDay, isAllProductsLoader }) => {
  useEffect(() => {
    console.log(221424);
    console.log({ isAllProductsLoader });
  });

  return (
    <>
      {productsByDay.length === 0 && <p>В этот день ничего не ели!</p>}
      {isAllProductsLoader && (
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

      {!isAllProductsLoader && (
        <Table>
          <Tbody>
            {productsByDay.map(el => {
              return <EatedProductItem productItem={el} key={el._id} />;
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isAllProductsLoader: state.dailyBlock.isAllProductsLoader,
  productsByDay: state.dailyBlock.productsByDay
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);

EatedProductsList.propTypes = {
  productsByDay: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllProductsLoader: PropTypes.bool.isRequired
};
