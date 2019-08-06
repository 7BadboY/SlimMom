import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';

import EatedProductItem from './EatedProductItem/EatedProductItem';

export class EatedProductsList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    isFetchLoader: PropTypes.func.isRequired
  };

  state = {};

  render() {
    const { products, isFetchLoader } = this.props;
    return (
      <>
        {/* <div className={styles.fetch_loader}>
          <Spinner
            name="pacman"
            style={{
              color: 'red',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div> */}
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
  }
}

const mapStateToProps = state => ({
  isFetchLoader: state.dailyBlock.isFetchLoader
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);
