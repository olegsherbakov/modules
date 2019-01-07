import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'
import styles from 'styles.scss'
import Add from 'components/add'
import List from 'components/list'

export default function Autonomous() {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <div className={styles.Container}>
        <h1>Is full autonomous module</h1>

        <Add title="New item" />

        <List emptyMessage={<div>List is empty...</div>} />
      </div>
    </Provider>
  )
}
