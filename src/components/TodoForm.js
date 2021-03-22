import React, { useState, useContext } from 'react'
import { TodoListContext } from './../state/TodoListprovider'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useContext(TodoListContext)

  const updateTask = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    setTasks((prevState) => [...prevState, { todo, id }])
    setTodo('')
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add task'
          autoFocus
          value={todo}
          onChange={updateTask}></input>

        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
