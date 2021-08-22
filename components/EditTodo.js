import { useState } from 'react';

const EditTodo = ({ todo, updateTodo, showAlert, setShowEditBox }) => {
  const { id, completed } = todo;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      showAlert('Input empty. Please add some text.');
    } else {
      const updatedTodo = { id, title: text, completed };
      updateTodo(updatedTodo);
      setShowEditBox(false);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='py-2'>
        <div>
          <input
            type='text'
            name='text'
            placeholder='New Text here ...'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className='btn-primary'>Update Todo</button>
          <button
            onClick={() => {
              setShowEditBox(false);
            }}
            className='btn-gray mx-1'
          >
            Cancel Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
