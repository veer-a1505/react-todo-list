import React from 'react'
import Todo from './Todo'

const TodoList = () => {
  const todos = [
    {
      name: 'create new project',
      id: 1,
    },
    {
      name: 'read one book',
      id: 2,
    },
    {
      name: 'write one blog',
      id: 3,
    },
    {
      name: 'listen to one programming podcast',
      id: 4,
    },
  ]
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo name={todo.name} />
      ))}
    </div>
  )
}

export default TodoList
