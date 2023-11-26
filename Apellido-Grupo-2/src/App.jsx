import React, { useEffect, useState } from "react";
import { GiGymBag } from "react-icons/gi";
import "./App.css";
import { TaskForm, TaskList } from "./components";

function App() {
  const [searchString, setSearchString] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentTasks, setCurrentTask] = useState([]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log("Actualizando");
    setCurrentTask(
      tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchString.toLowerCase()) ||
          task.description.toLowerCase().includes(searchString.toLowerCase()) ||
          task.series.toLowerCase().includes(searchString.toLowerCase()) ||
          task.repeticiones.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString, tasks]);

  const handleChangeSearchString = (e) => {
    setSearchString(e.target.value);
  };

  console.log(tasks);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="app">
        <div className="banner">
          <div className="principal-recuadro">
            <TaskForm addTask={addTask} />
            <br />
            <form onSubmit={handleSubmit} className="formulario">
              <label>Filtrar ejercicio: </label>
              <input
                placeholder="Abdominales"
                onChange={handleChangeSearchString}
                value={searchString}
              />
            </form>

          </div>
        </div>
        <br />
        <div>
          <TaskList tasks={currentTasks} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default App;
