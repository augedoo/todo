import React from 'react';

function StatusBar({ tasks, clearCompletedTasks }) {
  return (
    <div className='flex justify-between items-center'>
      <span className='status text-gray-600'>
        {tasks.filter((task) => task.isCompleted === true).length}/
        {tasks.length} completed
      </span>

      {tasks.map((task) => task.isCompleted).includes(true) && (
        <button className='status text-blue-600' onClick={clearCompletedTasks}>
          Clear completed
        </button>
      )}
    </div>
  );
}

export default StatusBar;
