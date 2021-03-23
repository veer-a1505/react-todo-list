import React, { useState, useContext } from 'react'
import { TodoListContext } from './../state/TodoListprovider'

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const { addTasks } = useContext(TodoListContext)

  const updateTask = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title) {
      alert('Please enter a task')
    } else {
      addTasks(title)
      setTitle('')
    }
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add task'
          autoFocus
          value={title}
          onChange={updateTask}></input>

        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
