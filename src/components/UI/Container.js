import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
  paper: {
    margin: '5px',
    padding: '10px'
  }
}

export const Container = (props) => (
  <Paper style={styles.paper}>
    {props.children}
  </Paper>
)

