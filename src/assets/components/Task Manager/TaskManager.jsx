import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "../Greeting/AddTaskForm";
import List from "./List";
import style from "./style.module.css";

function TaskManager(){
    const [tasks, setTasks] = useState([])

    const addTask = (text, dueDate) => {
        const newTask = {
            id: uuidv4(),
            text,
            dueDate: dueDate
        }
        setTasks([newTask, ...tasks])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(item => id !== item.id))
    }

    return(
        <div className={style.container}>
            <h3 className={style.title}>Task Manager</h3>
            <AddTaskForm addTask={addTask} />
            {tasks.length > 0 ? (
                <List list={tasks} removeTask={removeTask} />
            ) : (
                <p>No tasks.</p>
            )}
        </div>
    )
}

export default TaskManager