import React from 'react'
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'

function App() {
  return (
    <div className='container'>
      <TodoHeader />
      <TodoForm />
    </div>
  )
}

export default App
