import style from "./style.module.css";

function List({ list, removeTask }) {
    return(
        <ul className={style.list}>
            {list.map(item => {
                return ( 
                    <li className={style.listItem} key={item.id}>
                        <span className={style.taskText}>{item.text}</span>
                        {item.dueDate && (
                            <span className={style.dueDate}>
                                Due: {new Date(item.dueDate).toLocaleDateString()}
                            </span>
                        )}
                        <button 
                            className={style.removeBtn} 
                            onClick={() => removeTask(item.id)}
                        >
                            Remove
                        </button>
                    </li> 
                ) 
            })}
        </ul>
    )
}

export default List