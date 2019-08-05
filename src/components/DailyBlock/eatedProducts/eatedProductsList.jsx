import React from 'react'
import PropTypes from 'prop-types'
import _eatedProductItem from './eatedProductItem/eatedProductItem'

const eatedProducts = props => {
  return (
    <div>
      <p>Eated Products List</p>
      <_eatedProductItem />
    </div>
  )
}

eatedProducts.propTypes = {

}

export default eatedProducts
