import React, { useState } from 'react'

const TodoForm = () => {
  const [task, setTask] = useState('')

  const updateTask = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTask('')
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add task'
          autoFocus
          value={task}
          onChange={updateTask}
        ></input>

        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
