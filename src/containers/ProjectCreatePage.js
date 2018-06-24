import React, { PureComponent } from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';
import * as urls from '../urls';
import ImageUploadField from '../components/ImageUploadField';

const styles = {
  self: {
    maxWidth: 500,
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

class ProjectCreatePage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.self}>
        <form>
          <div className={classes.fields}>
            <ImageUploadField label="Image" />
            <TextField label="Title" />
            <Button>Create</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectCreatePage);
