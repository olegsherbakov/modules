import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'
import styles from 'styles.scss'
import Add from 'components/add'
import List from 'components/list'

import Autonomous from 'autonomous'
import Connected from 'connected'

export default function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <div className={styles.Container}>
        <h1>It's top-level of application</h1>

        <div className={styles.Container}>
          <h2>Common example</h2>

          <Add />

          <List />
        </div>

        <div className={styles.Container}>
          <h2>Custom examples</h2>

          <Connected />

          <Autonomous />
        </div>
      </div>
    </Provider>
  )
}
