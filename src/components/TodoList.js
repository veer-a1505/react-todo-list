import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoListContext } from './../state/TodoListprovider'

const TodoList = () => {
  const [tasks] = useContext(TodoListContext)
  console.log(tasks)
  return (
    <div className='todo-list'>
      {tasks.map((task) => (
        <Todo name={task.todo} key={task.id} />
      ))}
    </div>
  )
}

export default TodoList
