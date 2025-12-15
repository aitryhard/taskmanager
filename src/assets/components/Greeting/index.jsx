import style from "./style.module.css"
import { useState } from "react"

const Greeting = () =>{
    const [counter, setCounter] = useState(0)
    const [userInput, setUserInput] = useState("")


    const increment = () => {
        setCounter(counter + +userInput)
    }

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    return(
        <div className={style.greeting_wrp}>
            <h1>Hello World!</h1>
            <h2>How are you?</h2>
            <input type="number" value={userInput} onChange={handleChange}/>
            <button className={style.button} onClick={increment}>Click Count: {counter} </button>
        </div>
    )
}

export default Greeting
