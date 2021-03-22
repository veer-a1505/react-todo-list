import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TodoListprovider from './state/TodoListprovider'

ReactDOM.render(
  <TodoListprovider>
    <App />
  </TodoListprovider>,
  document.getElementById('root')
)
