import React from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as urls from '../urls';

const styles = {
  wrapper: {
    display: 'block',
    margin: 'auto',
    maxWidth: 300,
  },
  self: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#031926',
    color: 'white',
    marginTop: 10,
  }
};

class LoginPage extends React.Component {
  state = {
      submitting: false,
      username: '',
      password: ''
  };

  handleChangeUsername = (e) => {
     this.setState({ username: e.target.value });
  }

  handleChangePassword = (e) => {
     this.setState({ password: e.target.value });
  }

  handleSubmit = () => {
    const { login } = this.props;
    const { username, password } = this.state;
    this.setState({ submitting: true }); //for loader purposes
    login({ username, password })
     .then(() => {
       const { history } = this.props;
       history.replace(urls.PROJECT_LIST);
     })
     .catch((error) => {
       this.setState({ username: '', password: '', submitting: false });
     });
  };

  render(){
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
          <form  className={classes.wrapper}>
             <div className={classes.self}>
              <TextField
                label="Username"
                name="username"
                value={username}
                onChange={this.handleChangeUsername}
              />
            <TextField
                label="Password"
                name="password"
                value={password}
                onChange={this.handleChangePassword}
              />
            <Button className={classes.button} onClick={this.handleSubmit}>Login</Button>
          </div>
        </form>
      )
  }
}

const mapDispatchToProps = {
  login: actions.login,
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(LoginPage));
