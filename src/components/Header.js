import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import * as urls from '../urls';

import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flex: 1,
  },
  sidebar: {
    width: 200,
  },
};

class Header extends PureComponent {
  state = {
    isDrawerOpen: false,
  };

  handleOpenDrawer = () => {
    this.setState({ isDrawerOpen: true });
  };

  handleCloseDrawer = () => {
    this.setState({ isDrawerOpen: false });
  };

  handleClickLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.state;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Zeppelin
          </Typography>
          <div>
            <Button color="inherit" onClick={this.handleClickLogout}>Logout</Button>
          </div>
        </Toolbar>
        <Drawer open={isDrawerOpen} onClose={this.handleCloseDrawer}>
          <div
            className={classes.sidebar}
            onClick={this.handleCloseDrawer}
            onKeyDown={this.handleCloseDrawer}
          >
            <List>
              <ListItem button>
                <ListItemText>
                  <Link to={urls.PROJECT_LIST}>Projects</Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link to={urls.PROJECT_CREATE}>New Project</Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText>
                  <Link to={urls.CREDITS}>Credits</Link>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

const mapDispatchToProps = {
  logout: actions.logout,
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(Header));
