import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <ul>
        {products.map(el => {
          return <EatedProductItem productItem={el} key={el._id} />;
        })}
      </ul>
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
