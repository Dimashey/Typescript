import React from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";

const App: React.FC = () =>  {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
      setTodos(prevState => {
          return [...prevState, {
              id: Math.random().toString(),
              text
          }]
      })
  };

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevState => {
            return  prevState.filter(todo => todo.id !== todoId);
        })
    };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
