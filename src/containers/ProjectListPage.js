import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import * as urls from '../urls';

import ProjectListItem from '../components/ProjectListItem';

const styles = {
  self: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

class ProjectListPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.self}>
        <div>Lista</div>
      </div>
    );
  }
}



export default withStyles(styles)(ProjectListPage);
