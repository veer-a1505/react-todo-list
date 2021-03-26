import React, { useState, createContext, useEffect } from 'react'

export const TodoListContext = createContext()

const TodoListprovider = (props) => {
  let localData = localStorage.getItem('tasksList')

  if (localData) {
    localData = JSON.parse(localData)
  } else {
    localData = []
  }

  const [tasks, setTasks] = useState(localData)
  const [editItem, setEditItem] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasks))
  }, [tasks])

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
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { name: value, id } : task
    )

    setTasks(updatedTasks)
    setEditItem('')
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <TodoListContext.Provider
      value={{
        tasks,
        addTasks,
        removeTask,
        findItem,
        editTask,
        editItem,
        clearTasks,
      }}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListprovider
