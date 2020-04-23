import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import config from './key';

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; //if userAuth = null => exit this function

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);

        }
    }
    //we still needs userRef for something
    return userRef;

}

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