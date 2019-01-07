import React from 'react'
import { connect } from 'react-redux'

import Item from 'components/item'

function List({ items, emptyMessage = null }) {
  if (!items.length) {
    return emptyMessage
  }

  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default connect(({ items }) => ({ items }))(List)
