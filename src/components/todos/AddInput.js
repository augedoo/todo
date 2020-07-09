import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Add extends Component {
  state = {
    text: '',
  };

  PropTypes = {
    addTask: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    // Do nothing when no input
    if (this.state.text === '') {
      return;
    }

    this.props.addTask(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='text'
          id='add-input'
          value={this.state.text}
          onChange={this.onChange}
          className='my-8 py-3 px-4 w-full block text-lg font-medium text-gray-800 shadow-md focus:outline-none focus:shadow-outline'
          placeholder='New todo'
        />
      </form>
    );
  }
}

export default Add;
