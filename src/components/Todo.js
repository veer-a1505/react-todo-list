import React, { useContext } from 'react'
import { TodoListContext } from '../state/TodoListprovider'

const Todo = ({ task }) => {
  const { removeTask, findItem } = useContext(TodoListContext)

  return (
    <li>
      <span>{task.name}</span>
      <button className='edit-btn' onClick={() => findItem(task.id)}>
        <i className='fas fa-edit'></i>
      </button>
      <button className='trash-btn' onClick={() => removeTask(task.id)}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  )
}

export default Todo
