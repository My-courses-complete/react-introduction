import React from "react";
import { TodoContext } from "../context/todoContext";
import "./TodoForm.css";

export default function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <label htmlFor="">Escribe un nuevo TODO</label>
      <textarea
        placeholder="Cortar la cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={() => setOpenModal(false)}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}
