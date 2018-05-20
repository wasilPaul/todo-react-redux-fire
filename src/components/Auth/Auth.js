import React from 'react'
import { connect } from 'react-redux'
import { logInByGoogle } from '../../state/auth'
import LogInByGoogle from './LogInByGoogle'

export default connect(
    state => ({
        isUserLoggedIn: state.auth.isLoggedIn
    }),
    dispatch => ({
        logInByGoogle: () => dispatch(logInByGoogle())
    })
)(
    (props) => (
        <div>
            {
                props.isUserLoggedIn ?
                    props.children
                    :
                    <LogInByGoogle
                        onLogInHandler={props.logInByGoogle}
                    />
            }
        </div>
    )
)