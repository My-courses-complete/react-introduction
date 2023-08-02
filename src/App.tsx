import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import React from "react";

interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos , setTodos] = React.useState(() : Array<Todo> => {
    const savedTodos = localStorage.getItem("TODOS_V1");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      localStorage.setItem("TODOS_V1", JSON.stringify([]));
      return [];
    }
  });

  const saveTodos = (newTodos: Array<Todo>) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem text={todo.text} completed={todo.completed} key={index} onComplete={() => completeTodo(index)} onDelete={() => deleteTodo(index)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
