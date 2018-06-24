import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ProjectCreatePage from '../containers/ProjectCreatePage';
import ProjectEditPage from '../containers/ProjectEditPage';
import ProjectListPage from '../containers/ProjectListPage';
import * as selectors from '../selectors';
import * as urls from '../urls';

class Layout extends React.Component {
  render(){
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <Redirect to={urls.LOGIN} />
      );
}
    return (<div>
             <Header/>
            <p>Layout</p>
          <Switch>
            <Route path={ urls.PROJECT_CREATE } component={ ProjectCreatePage }/>
            <Route path={ urls.PROJECT_EDIT } component={ ProjectEditPage }/>
            <Route path={ urls.PROJECT_LIST } component={ ProjectListPage }/>
          </Switch>
        </div>);
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: selectors.isLoggedIn(state),
  }
}

export default (connect(mapStateToProps)(Layout));
