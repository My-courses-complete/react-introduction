import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = React.createContext<TodoContext>({
  loading: true,
  error: false,
  totalTodos: 0,
  completedTodos: 0,
  searchValue: "",
  setSearchValue: () => {},
  searchedTodos: [],
  completeTodo: () => {},
  deleteTodo: () => {},
  openModal: false,
  setOpenModal: () => {},
  addTodo: () => {},
});

export default function TodoProvider({ children }: TodoContextProps) {
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
