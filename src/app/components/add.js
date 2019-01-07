import React from 'react'
import { connect } from 'react-redux'

import { add } from '../actions'

function Add({ add }) {
  return <button onClick={add}>Add</button>
}

const mapDispatchToProps = dispatch => ({
  add: id => dispatch(add()),
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Add)
