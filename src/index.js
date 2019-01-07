import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default

    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
