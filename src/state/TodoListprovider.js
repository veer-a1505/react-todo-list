import React, { useState, createContext } from 'react'

const TodoListContext = createContext()

const TodoListprovider = (props) => {
  const [tasks, setTasks] = useState([])
  return (
    <TodoListContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListprovider
