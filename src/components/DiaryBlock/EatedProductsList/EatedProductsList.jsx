import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';
import EatedProductItem from './EatedProductItem/EatedProductItem';
import { getProductsByDayAction } from '../../../redux/actions/productActions';

const EatedProductsList = ({ productsByDay, isProductsByDayLoader }) => {
  const dispatch = useDispatch();
  const getProdByDay = (token, date) => {
    dispatch(getProductsByDayAction(token, date));
  };

  useEffect(() => {
    console.log('EatedProductsList is loaded');
    const token = localStorage.getItem('userToken');
    const date = new Date().getTime();
    getProdByDay(token, date);
  }, []);

  return (
    <>
      {productsByDay.length === 0 && <p>Здесь будет отображаться Ваш рацион</p>}
      {isProductsByDayLoader && (
        <div className={styles.fetch_loader}>
          <Spinner
            name="pacman"
            style={{
              color: '#f47929',
              display: 'block',
              margin: '0 auto',
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
      )}

      {productsByDay && (
        <Table className={styles.firstBlock}>
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
  isProductsByDayLoader: state.dailyBlock.isProductsByDayLoader,
  productsByDay: state.dailyBlock.productsByDay
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);

EatedProductsList.propTypes = {
  productsByDay: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isProductsByDayLoader: PropTypes.bool.isRequired
};
