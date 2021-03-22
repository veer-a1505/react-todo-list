import React from 'react'
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='container'>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
