import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

import styles from '../styles/Todo.module.css';

const TodoItem = ({ todo, deleteTodo }) => {
  const { id, title, completed } = todo;

  const handleKeyPress = (e) => {
    if (e.key === 'd' || e.key === 'D') {
      deleteTodo(id);
    }
  };

  return (
    <div className='flex flex-justify'>
      <input
        type='checkbox'
        onChange={() => {
          console.log('checked: ', title);
        }}
        checked={!!completed}
        onKeyPress={handleKeyPress}
      />
      <h4 className={styles.todoText}>{title}</h4>
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
  );
};

export default TodoItem;
