import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenNewTaskModal = () => {
    setOpenModal(true);
  };
  const handleCloseNewTaskModal = () => {
    setOpenModal(false);
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();
    const { title, description, series, repeticiones } = e.target;
    if (
      title.value &&
      description.value &&
      series.value &&
      repeticiones.value
    ) {
      addTask({
        title: title.value,
        description: description.value,
        series: series.value,
        repeticiones: repeticiones.value,
        id: Math.random() + title.value,
      });
    }
    handleCloseNewTaskModal();
  };
  return (
    <div>
      <button onClick={handleOpenNewTaskModal}>
        Registra un nuevo ejercicio
      </button>
      {openModal && (
        <div className="modal-principal">
          <div className="modal">
            <h2>Ejercicio</h2>
            <form onSubmit={handleAddNewTask}>
              <div>
                <label htmlFor="title">Titulo:</label>
                <input
                  placeholder="Nombre del ejercicio"
                  id="title"
                  name="title"
                />
              </div>
              <div>
                <label htmlFor="description">Descripción: </label>
                <textarea
                  placeholder="Describí cómo se realiza el ejercicio"
                  id="description"
                  name="description"
                ></textarea>
              </div>
              <div>
                <label htmlFor="series">Series: </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Cuantas series vas a realizar"
                  id="series"
                  name="series"
                ></input>
              </div>
              <div>
                <label htmlFor="repeticiones">Repeticiones: </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Cuantas repeticiones vas a realizar"
                  id="repeticiones"
                  name="repeticiones"
                ></input>
              </div>
              <div>
                <button onClick={handleCloseNewTaskModal}>Cancelar</button>
                <button type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
