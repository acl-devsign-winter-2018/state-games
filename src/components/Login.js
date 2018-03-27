import React, { PureComponent } from 'react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';
import { providers } from '../services/firebase';
import { connect } from 'react-redux';
import { clearUser } from './actions';


const ui = new firebaseui.auth.AuthUI(firebase.auth());

class Login extends PureComponent{
  componentDidMount() {
    this.props.user ? clearUser() : '';
    const { origin } = window.location;
    const { history } = this.props;

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: `${origin}/game`,
      callbacks: { 
        signInSuccess: function() {
          
          setTimeout(() =>  history.push('/game'), 100);
          
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions:[
        {
          provider: providers.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        },
        providers.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }

  render(){
    return (
      <div>
        <h1>Sign in to An Escape Game</h1>
        <div id="firebaseui-auth-container"></div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { clearUser }
)(Login);
