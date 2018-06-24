import React, { PureComponent } from 'react';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import * as urls from '../urls';


const styles = {
  self: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

class ProjectListPage extends PureComponent {
  state = {
    loading: true
  }

  componentDidMount() {
    const { readProjectList } = this.props;
    readProjectList().finally(() => {
      this.setState({ loading: false });
    });
}
  render() {
    const { projects } = this.props;
    if(this.state.loading) {
      return null
    }
    let projectsList = projects.map((project) => {
      return <div>{ project.title }</div>;
            });
    return (
      <div>
        { projectsList }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    projects: selectors.getProjectList(state),
  };
}

const mapDispatchToProps = {
  readProjectList: actions.readProjectList,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProjectListPage));
