import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import { TodoContext } from "./context/todoContext";
import React from "react";
import Modal from "./modal";
import TodoForm from "./TodoForm";

function App() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal: modalIsOpen, setOpenModal } =
    React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>loading...</p>}
        {error && <p>error...</p>}
        {!loading && !searchedTodos.length && <p>create your first todo!</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={index}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </TodoList>
      <CreateTodoButton openModal={() => setOpenModal(!modalIsOpen)}/>
      

        {modalIsOpen && <Modal> <TodoForm/> </Modal>}

    </>
  );
}

export default App;
