import { TaskCard } from "./TaskCard"
import { TaskContext } from "../context/TaskContext"
import { useContext } from "react"

export function TaskList() {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">You don't have any cats in your collection yet</h1>
    }

    return <div className="grid grid-cols-4 gap-2">
        {
            tasks.map(t => <TaskCard  key={t.id} t={t} />
            )
        }
    </div>
}

