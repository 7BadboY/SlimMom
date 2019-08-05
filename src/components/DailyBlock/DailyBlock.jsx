import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _addNewProduct from './addNewProduct/addNewProduct'
import _datePicker from './datePicker/datePicker'
import _eatedProducts from './eatedProducts/eatedProductsList'

export class DaylyBlock extends Component {
  state = {}

  render() {
    return (
      <div>
        <p>DaylyBlock</p>
        <_datePicker />
        <_addNewProduct />
        <_eatedProducts />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DaylyBlock)
