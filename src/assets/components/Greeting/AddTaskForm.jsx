import { useState } from "react"

const AddTaskForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleDateChange = (e) => {
        setDueDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput, dueDate)
        setUserInput("")
        setDueDate("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="your plans"
                value={userInput} 
                onChange={handleChange}
            />
            <input 
                type="date"
                value={dueDate}
                onChange={handleDateChange}
            />
            <button type="submit">add</button>
        </form>
    )
}

export default AddTaskForm
