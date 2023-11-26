import React from 'react'
import './TaskList.css'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks, deleteTask}) => {
  return (
    <div className='list'>
        {tasks.length === 0 ? <h2>Sin registros</h2> : <div>
            {tasks.map(task =>( <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>))}
        </div>}
    </div>
  )
}

export default TaskList