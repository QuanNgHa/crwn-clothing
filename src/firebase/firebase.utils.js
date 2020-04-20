import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import config from './key';

firebase.initializeApp(config);

//Export to access firebase auth anywhere we want
export const auth = firebase.auth()
export const firestore = firebase.firestore();

//Setup Google Authentication Utils:
// Give access to google Auth class
const provider = new firebase.auth.GoogleAuthProvider();
// Setting Parameter: select_account to trigger google pop-up
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;