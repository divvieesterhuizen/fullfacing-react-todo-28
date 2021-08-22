const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;

  return (
    <div className='flex'>
      <input
        type='checkbox'
        onChange={() => {
          onCheck(id);
        }}
        checked={!!completed}
      />
      <h4>{title}</h4>
    </div>
  );
};

export default TodoItem;
