import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../state/auth'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { database, auth } from '../firebase';


export default connect(
    () => ({}),
    dispatch => ({
        logOut: () => dispatch(logOut())
    })
)(
    (props) => (
        <div>{console.log(auth.currentUser)}
            <AppBar
                title={`Signed in as: ${auth.currentUser.displayName || auth.currentUser.email}`}
                showMenuIconButton={false}
                iconElementRight={<IconButton><NavigationClose /></IconButton>}
                onRightIconButtonClick={props.logOut}
            />
        </div>
    )
)