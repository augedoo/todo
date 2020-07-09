import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos({ tasks, changeTaskStatus }) {
  return (
    <Fragment>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          changeTaskStatus={changeTaskStatus}
        />
      ))}
    </Fragment>
  );
}

Todos.propTypes = {
  tasks: PropTypes.array.isRequired,
  changeTaskStatus: PropTypes.func.isRequired,
};

export default Todos;
