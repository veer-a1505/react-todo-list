import React, { useState, createContext } from 'react'

export const TodoListContext = createContext()

const TodoListprovider = (props) => {
  const [tasks, setTasks] = useState([])
  const [editItem, setEditItem] = useState(null)

  const addTasks = (value) => {
    const id = Math.floor(Math.random() * 1000)
    setTasks([...tasks, { name: value, id }])
  }

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks([...updatedTasks])
  }

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id)
    setEditItem(item)
  }

  const editTask = (value, id) => {
    console.log(value)
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { name: value, id } : task
    )

    setTasks(updatedTasks)
    setEditItem('')
  }

  return (
    <TodoListContext.Provider
      value={{ tasks, addTasks, removeTask, findItem, editTask, editItem }}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListprovider
