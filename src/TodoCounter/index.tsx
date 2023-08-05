import React from "react";
import { TodoContext } from "../context/todoContext";
import "./TodoCounter.css";

export default function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
	<h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}
