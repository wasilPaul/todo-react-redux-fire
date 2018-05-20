import React from 'react'
import { connect } from 'react-redux'

import { RaisedButton } from 'material-ui'
import { TextField } from 'material-ui'

import { addTask, deleteTask, newTaskChangeHandler } from '../state/todos'

const Todo = (props) => (
    <div>
        <TextField
            name={'new-task'}
            onChange={props.onNewTaskChangeHandler}
            value={props.newTaskText}
        />
        <RaisedButton
            primary={true}
            label={'Add new task'}
            onClick={props.onAddTask}
        />
        <ul>
            {
                props.tasks.map((task, index) => (
                    <li>
                        {task.task}
                        <RaisedButton
                            secondary={true}
                            label={'Delete'}
                            onClick={() => props.deleteTask(index)}
                        />
                    </li>
                ))
            }
        </ul>
    </div>
)

export default connect(
    state => ({
        tasks: state.todos.tasks,
        newTaskText: state.todos.newTaskText
    }),
    dispatch => ({
        onAddTask: () => dispatch(addTask()),
        deleteTask: (index) => dispatch(deleteTask(index)),
        onNewTaskChangeHandler: (event, value) => dispatch(newTaskChangeHandler(value))
    })
)(Todo)