import React from 'react'
import { RaisedButton } from 'material-ui'

const LogInByGoogle = (props) => (
    <RaisedButton
        label={'Log in by Google'}
        primary={true}
        fullWidth={true}
        onClick={props.onLogInHandler}
    />
)

export default LogInByGoogle
