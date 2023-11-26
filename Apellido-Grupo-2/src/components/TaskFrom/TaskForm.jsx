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
      <h1>Registra tus ejercicios:</h1>
      <button className="buttonPrincipal" onClick={handleOpenNewTaskModal}>
        Agregar
      </button>
      {openModal && (
        <div className="modal-principal">
          <div className="modal">
            <h2>Nuevo ejercicio:</h2>
            <form className="form" onSubmit={handleAddNewTask}>
              <div>
                <label htmlFor="title">Titulo: </label>
                <input
                  placeholder="Abdominales"
                  id="title"
                  name="title"
                />
              </div>
              <br />
              <div>
                <label htmlFor="description">Descripción: </label>
                <textarea className="textArea"
                  placeholder="Ejemplo: rodillas dobladas en ángulo de 60°, pies y espalda rectos en el piso, contraer el abdomen, levantar la parte superior de la espalda."
                  id="description"
                  name="description"
                ></textarea>
              </div>
              <br />
              <div>
                <label htmlFor="series">Series: </label>
                <input className="inputNumber"
                  type="number"
                  min="1"
                  placeholder="3"
                  id="series"
                  name="series"
                ></input>

                <label htmlFor="repeticiones"> Repeticiones: </label>
                <input className="inputNumber"
                  type="number"
                  min="1"
                  placeholder="30"
                  id="repeticiones"
                  name="repeticiones"
                ></input>
              </div>
              <br />
              <div>
                <button className="buttonCancelar" onClick={handleCloseNewTaskModal}>Cancelar</button>
                <button className="buttonAgregar" type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
