import React from 'react'
import { connect } from 'react-redux'

import Item from './item'

function List({ items }) {
  return items.length ? (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  ) : null
}

export default connect(({ items }) => ({ items }))(List)
