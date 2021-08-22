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
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))
      ) : (
        <h4>No Todos to show. Maybe add one using the form above.</h4>
      )}
    </>
  );
};

export default TodoList;
