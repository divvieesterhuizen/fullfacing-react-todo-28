import { useState } from 'react';

import EditTodo from './EditTodo';
import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

import styles from '../styles/Todo.module.css';

const TodoItem = ({
  todo,
  deleteTodo,
  checkTodo,
  updateTodo,
  showAlert,
  updatedTodo,
}) => {
  const { id, title, completed } = todo;

  const [showEditBox, setShowEditBox] = useState(false);

  const onEditClick = () => {
    setShowEditBox(!showEditBox);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'd' || e.key === 'D') {
      deleteTodo(id);
    }
    if (e.key === 'e' || e.key === 'E') {
      onEditClick();
    }
  };

  return (
    <div>
      {' '}
      <div className='flex flex-justify'>
        <input
          type='checkbox'
          onChange={() => {
            checkTodo(id);
          }}
          checked={!!completed}
          onKeyPress={handleKeyPress}
        />
        <h4 className={styles.todoText}>
          <div className={completed ? styles.textStrike : ''}>{title}</div>
        </h4>
        <FaTrash
          onClick={() => {
            deleteTodo(id);
          }}
          className={`${styles.todoIcon} red`}
        />
        <FaPencilAlt
          onClick={() => {
            onEditClick();
          }}
          className={`${styles.todoIcon} green`}
        />
      </div>
      <div>
        {showEditBox && (
          <EditTodo
            todo={todo}
            updateTodo={updateTodo}
            showAlert={showAlert}
            setShowEditBox={setShowEditBox}
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
