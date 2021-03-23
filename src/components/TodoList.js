import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoListContext } from './../state/TodoListprovider'

const TodoList = () => {
  const { tasks } = useContext(TodoListContext)

  return (
    <div className='todo-list'>
      {tasks.map((task) => (
        <Todo task={task} key={task.id} />
      ))}
    </div>
  )
}

export default TodoList
