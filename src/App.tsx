import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";

interface Todo {
  text: string;
  completed: boolean;
}

const defaultTodos: Array<Todo> = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LA CEBOLLA", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter total={3} completed={1} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem text={todo.text} completed={todo.completed} key={index} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
