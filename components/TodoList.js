import { useState } from 'react';

import { nanoid } from 'nanoid';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Alert from './Alert';

const TodoList = () => {
  // State
  const [todos, setTodos] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');

  // Functions
  const addTodo = (text) => {
    const newTodo = { id: nanoid(), title: text, completed: false };
    setTodos([...todos, newTodo]);
    showAlert('Todo Added.');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      })
    );
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

  const showAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => {
      setAlertMsg('');
    }, 2000);
  };

  return (
    <>
      {alertMsg.length > 0 && <Alert msg={alertMsg} />}

      <AddTodo addTodo={addTodo} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            updateTodo={updateTodo}
            showAlert={showAlert}
          />
        ))
      ) : (
        <h4>No Todos to show. Maybe add one using the form above.</h4>
      )}
    </>
  );
};

export default TodoList;
