import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    //onAuthStateChanged to check in Firebase if Auth changed, if changed => return userAuth info
    //async userAuth since this is an API request => Async function
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user log-in => userAuth is not Null
      if (userAuth) {
        //Create new userAuth infor if not exists
        const userRef = await createUserProfileDocument(userAuth);
        //Update the currentUser State of App
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() //snapShote.data() returns everything in Snapshot, except id
            }
          })
        });

      }
      //(userAuth == null) means user logged out => set currentUser State to null
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

