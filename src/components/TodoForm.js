import React, { useState, useContext, useEffect } from 'react'
import { TodoListContext } from './../state/TodoListprovider'

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const { addTasks, editItem, editTask, clearTasks } = useContext(
    TodoListContext
  )

  const updateTask = (e) => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.name)
    } else {
      setTitle('')
    }
  }, [editItem])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!editItem) {
      addTasks(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
      setTitle('')
    }
  }

  const handleClear = () => {
    clearTasks()
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add task'
          autoFocus
          value={title}
          required
          onChange={updateTask}></input>

        <div className='form-btn'>
          <button type='submit'>Add</button>
          <button type='button' onClick={() => handleClear()}>
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
