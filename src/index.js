import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as Sentry from '@sentry/browser'

Sentry.init({ dsn: 'https://8fa1ee8e07264f8cb654d0e1358a9642@sentry.io/3532923' })

console.log('%cHey Stop Right There!', 'color: red; font-size: 40px;')

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
