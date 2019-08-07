import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';

import EatedProductItem from './EatedProductItem/EatedProductItem';

const EatedProductsList = ({ products, isFetchLoader }) => {
  const [num, incNum] = useState(1);

  console.log(num);

  const doSome = () => {
    incNum(prev => prev + 1);
  };

  return (
    <>
      <button onClick={doSome} type="button">
        {num}
      </button>
      {isFetchLoader && (
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
      {!isFetchLoader && (
        <Table>
          <Tbody>
            {products.map(el => {
              return <EatedProductItem productItem={el} key={el._id} />;
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isFetchLoader: state.dailyBlock.isFetchLoader
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);

EatedProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isFetchLoader: PropTypes.func.isRequired
};
