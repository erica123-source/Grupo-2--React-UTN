import React from 'react'
import './TaskItem.css'
import { CgGym } from "react-icons/cg";

const TaskItem = ({task, deleteTask}) => {
    return (
        <div className='caja'>
            <hr color='black' width='800px' />
            <h2><CgGym/>{task.title}</h2>
            <p>{task.description}</p>
            <div>
                <p>Series: {task.series}  Repeticiones: {task.repeticiones}</p>
            </div>
            
            <button className='buttonDelete' onClick={() => deleteTask(task.id)}>Eliminar registro</button>
            <hr color='black' width='800px'/>
        </div>
    )
}

export default TaskItem