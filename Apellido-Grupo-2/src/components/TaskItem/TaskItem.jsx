import React from 'react'

const TaskItem = ({task, deleteTask}) => {
    return (
        <div className='caja'>
            
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <div>
                <p>Series: {task.series}</p>
                <p>Repeticiones: {task.repeticiones}</p>
            </div>
            
            <button onClick={() => deleteTask(task.id)}>Eliminar registro</button>
            
        </div>
    )
}

export default TaskItem