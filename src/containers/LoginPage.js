import React from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';


const styles = {
  self: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
  },
};

class LoginPage extends React.Component {
  render(){
    const { classes } = this.props;
    return (
          <form>
             <div className={classes.self}>
              <TextField
                label="Username"
                name="username"
              />
            <TextField
                label="Password"
                name="password"
              />
            <Button>Login</Button>
          </div>
        </form>
      )
  }
}


export default withStyles(styles)(LoginPage);
