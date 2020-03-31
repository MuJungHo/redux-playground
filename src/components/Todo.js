import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onToggleClick, onDeleteClick, completed, text }) => (
  <div>
    <li
      onClick={onToggleClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={onDeleteClick}>x</button>
  </div>
)

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
