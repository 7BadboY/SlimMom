import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';

// import EatedProductItem from './EatedProductItem/eatedProductItem';
import EatedProductItem from './EatedProductItem/EatedProductItem';

export class EatedProductsList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired
  };

  state = {};

  render() {
    const { products } = this.props;
    return (
      <Table>
        <Tbody>
          {products.map(el => {
            return <EatedProductItem productItem={el} key={el._id} />;
          })}
        </Tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  isSome: state.isSome
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);
