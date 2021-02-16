import React from 'react';
// import './Login.css';
import { GoogleLogin } from 'react-google-login';
import { signInWithGoogle, startFirebaseUI } from './firebase';
import { auth } from './firebase';

import GoogleButton from 'react-google-button';

class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    startFirebaseUI('#firebaseui');
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='user-info'>
        {

          this.state.currentUser ?

            (<div>
              <div>
                <img src={this.state.currentUser.photoURL} />
              </div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>

              <button onClick={() => auth.signOut()}>LOG OUT</button>
            </div>
            ) :
            <GoogleButton onClick={signInWithGoogle} />

        }
      </div >
    );
  }
}


export default Login;
