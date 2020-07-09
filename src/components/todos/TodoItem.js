import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ task, changeTaskStatus }) {
  const onchange = (e) => {
    const text = e.target.parentElement.textContent;
    changeTaskStatus(text);
  };

  return (
    <div className='flex justify-start items-center px-3 py-2 hover:bg-gray-300'>
      {task.isCompleted ? (
        <input
          type='checkbox'
          checked
          className='mr-4 h-4 w-4'
          onChange={onchange}
        />
      ) : (
        <input type='checkbox' className='mr-4 h-4 w-4' onChange={onchange} />
      )}

      <span className='text-lg'>{task.task}</span>
    </div>
  );
}

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  changeTaskStatus: PropTypes.func.isRequired,
};

export default TodoItem;
