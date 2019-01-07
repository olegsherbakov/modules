import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import styles from './styles.scss'
import Add from './components/add'
import List from './components/list'

export default function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <div className={styles.Container}>
        <h1>It's app #1</h1>

        <Add />

        <List />
      </div>
    </Provider>
  )
}
