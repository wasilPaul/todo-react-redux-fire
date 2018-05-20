import React from 'react'
import { connect } from 'react-redux'

import { RaisedButton, MenuItem, Divider } from 'material-ui'
import Delete from 'material-ui/svg-icons/action/delete'
import { TextField } from 'material-ui'

import { addTask, deleteTask, newTaskChangeHandler } from '../state/todos'
import { Container } from './UI/Container'

const Todo = (props) => (
    <div>
        <Container>
            <TextField
                name={'new-task'}
                onChange={props.onNewTaskChangeHandler}
                value={props.newTaskText}
                fullWidth={true}
            />
            <Divider />
            <RaisedButton            
                primary={true}
                label={'ADD TASK'}
                disabled={!props.newTaskText ? true : false}
                onClick={props.onAddTask}
                fullWidth={true}
            />
        </Container>
        <Container>
            {
                props.tasks.map((task, index) => (
                    <MenuItem
                        primaryText={task.task}
                        rightIcon={<Delete onClick={() => props.deleteTask(index)} />}
                    />
                ))
            }
        </Container>


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