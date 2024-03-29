import { FaTimes } from 'react-icons/fa'

const Task = ({ task, deleteFunc, toggleFunc }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => toggleFunc(task.id)}>
            <h3>
                {task.text}
                <FaTimes onClick={() => deleteFunc(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task