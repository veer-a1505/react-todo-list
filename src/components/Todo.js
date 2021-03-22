import React from 'react'

const Todo = ({ task }) => {
  console.log(task)
  return (
    <li>
      <span>{task.todo}</span>
      <button className='edit-btn'>
        <i className='fas fa-edit'></i>
      </button>
      <button className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  )
}

export default Todo
