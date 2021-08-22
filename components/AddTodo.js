import { useState } from 'react';

const AddTodo = ({ addTodo, showAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      showAlert('Input empty. Please add some text.');
    } else {
      addTodo(text);
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
            placeholder='Type todo here ...'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className='btn-primary'>Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
