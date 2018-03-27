import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { listenForUser } from './actions';
import Main from './Main';
import Login from './Login';

class App extends Component{

  componentDidMount() {
    this.props.listenForUser();
  }

  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute exact path='/game' component={Main}/>
            <Redirect to='/' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { listenForUser }
)(App);
