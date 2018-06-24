import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';

const styles = {
  self: {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20,
    maxWidth: 500,
  },
  image: {
    height: 300,
  },
};

export class ProjectListItem extends PureComponent {

  render() {
    const { classes } = this.props;
    return (
      <Card classes={{ root: classes.self }}>
        <CardMedia
          className={classes.image}
        />
        <CardContent>
          <Typography variant="headline" gutterBottom component="h2">Tytuł</Typography>
          <Typography component="p">by właściciel</Typography>
          <Typography component="p">data</Typography>
          <Typography component="p">liczba koemnatrzy</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Edit</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectListItem);
