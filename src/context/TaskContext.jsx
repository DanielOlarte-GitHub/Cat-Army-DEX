import { createContext } from "react"
import { useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])


    function createTask(taskTitle, taskDescription) {
        setTasks([...tasks, {
            title: taskTitle,
            id: tasks.length + 1,
            description: taskDescription
        }])
    }


    function deleteTask(taskId) {
        setTasks(tasks.filter(t => t.id != taskId))
    }

    useEffect(() => {
        setTasks(data)
      }, [])

    return <TaskContext.Provider value={{tasks, createTask, deleteTask}}>

        {props.children}
    </TaskContext.Provider>

}