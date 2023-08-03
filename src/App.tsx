import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import { TodoContext } from "./context/todoContext";

function App() {
  return (
    <>
      <TodoContext.Consumer>
        {({
          loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <>
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList>
              {loading && <p>loading...</p>}
              {error && <p>error...</p>}
              {!loading && !searchedTodos.length && (
                <p>create your first todo!</p>
              )}
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
            <CreateTodoButton />
          </>
        )}
      </TodoContext.Consumer>
    </>
  );
}

export default App;
