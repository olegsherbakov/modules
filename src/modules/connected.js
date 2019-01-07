import React from 'react'
import styles from 'styles.scss'
import Add from 'components/add'
import List from 'components/list'

export default function Connected() {
  return (
    <div className={styles.Container}>
      <h1>Simple module</h1>

      <List />

      <Add title="Add item" />
    </div>
  )
}
