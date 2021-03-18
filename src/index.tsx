import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { initFirebaseDb } from './firebase'
import './App.scss'

initFirebaseDb()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
