import React, { Fragment, Component } from 'react';
import AddInput from '../todos/AddInput';
import Todos from '../todos/Todos';
import StatusBar from '../todos/StatusBar';
import axios from 'axios';

class Home extends Component {
  state = { tasks: [], loading: false };

  componentDidMount() {
    this.getTasks();
  }

  logData = async () => {
    console.log(this.state.tasks);
  };

  // Get all tasks
  getTasks = async () => {
    this.setState({ loading: true });
    const res = await axios.get(`http://localhost:3001/todos`);
    this.setState({ tasks: res.data, loading: false });
  };

  // Add a new task
  addTask = async (text) => {
    const newTask = {
      task: text,
      isCompleted: false,
    };
    await axios.post('http://localhost:3001/todos', newTask);
    this.getTasks();
  };

  // Update  task status
  updateTaskStatus = async (task) => {
    await axios.put(`http://localhost:3001/todos/${task.id}`, task);
  };

  // Delete a single task
  deleteTask = async (task) => {
    await axios.delete(`http://localhost:3001/todos/${task.id}`);
  };

  // Set task status (finished or undone)
  changeTaskStatus = async (text) => {
    const tasks = this.state.tasks;
    let selectedTask;
    tasks.forEach((task, index) => {
      if (task.task === text) {
        selectedTask = task;

        selectedTask.isCompleted
          ? (selectedTask.isCompleted = false)
          : (selectedTask.isCompleted = true);

        tasks.splice(index, 1, selectedTask);
        this.updateTaskStatus(selectedTask);
      }
    });
    this.setState({ tasks: tasks });
  };

  // Clear all completed tasks
  clearCompletedTasks = async () => {
    const tasks = this.state.tasks;
    const filteredTasks = tasks.filter((task) => {
      if (task.isCompleted) this.deleteTask(task);

      return task.isCompleted === false;
    });
    this.setState({ tasks: filteredTasks });
  };

  render() {
    return (
      <Fragment>
        <div className='card bg-gray-100 shadow-lg rounded-sm p-6 '>
          <div className='px-3'>
            <h1 className='font-bold text-3xl text-gray-90'>Todos</h1>
            <AddInput addTask={this.addTask} />
          </div>
          <div className='mb-16'>
            {this.state.loading ? (
              <p className='text-gray-600 pl-3'>Loading...</p>
            ) : (
              <Todos
                tasks={this.state.tasks}
                changeTaskStatus={this.changeTaskStatus}
              />
            )}
          </div>
          <StatusBar
            tasks={this.state.tasks}
            clearCompletedTasks={this.clearCompletedTasks}
          />
        </div>
      </Fragment>
    );
  }
}

export default Home;
