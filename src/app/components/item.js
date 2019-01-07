import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { toggle, remove } from '../actions'
import styles from '../styles.scss'

function Item({ item: { id, active }, toggle, remove }) {
  const classes = classNames({
    [styles.Item]: true,
    [styles.Disabled]: !active,
  })

  return (
    <li className={classes}>
      <span
        className={styles.Remove}
        data-id={id}
        onClick={({ currentTarget }) =>
          remove(+currentTarget.getAttribute(`data-id`))
        }
      >
        ⛌
      </span>

      <input
        type="checkbox"
        id={`item_${id}`}
        data-id={id}
        checked={active}
        data-active={active}
        onChange={({ currentTarget }) =>
          toggle(+currentTarget.getAttribute(`data-id`))
        }
      />

      <label htmlFor={`item_${id}`}>Item #{id}</label>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggle(id)),
  remove: id => dispatch(remove(id)),
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Item)
