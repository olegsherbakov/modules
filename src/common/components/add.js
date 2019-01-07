import React from 'react'
import { connect } from 'react-redux'

import { add } from 'actions'

function Add({ title = `Add`, add }) {
  return <button onClick={add}>{title}</button>
}

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add()),
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Add)
