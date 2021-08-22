import { useState } from 'react';

import { nanoid } from 'nanoid';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  // State
  const [todos, setTodos] = useState([]);

  // Functions
  const addTodo = (text) => {
    const newTodo = { id: nanoid(), title: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        ))
      ) : (
        <h4>No Todos to show. Maybe add one using the form above.</h4>
      )}
    </>
  );
};

export default TodoList;
