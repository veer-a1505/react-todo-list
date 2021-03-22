import React, { useContext } from 'react'
import { TodoListContext } from './../state/TodoListprovider'

const TodoHeader = () => {
  const [tasks] = useContext(TodoListContext)
  return <div className='todo-header'>To-Do List</div>
}

export default TodoHeader
