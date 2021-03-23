import React, { useState, createContext } from 'react'

export const TodoListContext = createContext()

const TodoListprovider = (props) => {
  const [tasks, setTasks] = useState([])

  const addTasks = (value) => {
    const id = Math.floor(Math.random() * 1000)
    setTasks([...tasks, { name: value, id }])
  }

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks([...updatedTasks])
  }

  return (
    <TodoListContext.Provider value={{ tasks, addTasks, removeTask }}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListprovider
