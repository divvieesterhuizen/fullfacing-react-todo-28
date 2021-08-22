import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Alert from './Alert';

const TodoList = () => {
  useEffect(() => {
    getTodosFromLocalStorage();
  }, []);

  // State
  const [todos, setTodos] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');

  // Functions
  const addTodo = (text) => {
    const newTodo = { id: nanoid(), title: text, completed: false };
    const todosList = [...todos, newTodo];
    setTodos(todosList);
    showAlert('Todo Added.');
    saveTodosInLocalStorage(todosList);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    deleteTodoFromLocalStorage(id);
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
    updateTodoInLocalStorage(updatedTodo);
  };

  const checkTodo = (id) => {
    let updatedTodo;
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          updatedTodo = todo;
          return todo;
        } else {
          return todo;
        }
      })
    );
    updateTodoInLocalStorage(updatedTodo);
  };

  const showAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => {
      setAlertMsg('');
    }, 2000);
  };

  const getTodosFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };

  const saveTodosInLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const deleteTodoFromLocalStorage = (id) => {
    let localTodos = JSON.parse(localStorage.getItem('todos'));
    localTodos = localTodos.filter((todo) => todo.id !== id);
    saveTodosInLocalStorage(localTodos);
  };

  const updateTodoInLocalStorage = (updatedTodo) => {
    let localTodos = JSON.parse(localStorage.getItem('todos'));

    localTodos = localTodos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });

    saveTodosInLocalStorage(localTodos);
  };

  return (
    <>
      {alertMsg.length > 0 && <Alert msg={alertMsg} />}

      <AddTodo addTodo={addTodo} showAlert={showAlert} />

      <h3 className='py-1'>
        Please use the d key to delete a selected todo, Please use the e key to
        open the edit todo box. <br />
      </h3>

      <h3 className='py-1'>
        Total Todos: {todos.length > 0 ? todos.length : 0}
      </h3>

      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            updateTodo={updateTodo}
            showAlert={showAlert}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <h3>No Todos to show. Maybe add one using the form above.</h3>
      )}
    </>
  );
};

export default TodoList;
