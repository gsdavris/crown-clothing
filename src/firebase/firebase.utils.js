import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZAjJIvw9yAThVVJxSf85AmUluy23mIZo",
    authDomain: "crown-db-a7c11.firebaseapp.com",
    databaseURL: "https://crown-db-a7c11.firebaseio.com",
    projectId: "crown-db-a7c11",
    storageBucket: "crown-db-a7c11.appspot.com",
    messagingSenderId: "680431023545",
    appId: "1:680431023545:web:8540d91662d4bd135a7268",
    measurementId: "G-GEGJ71ZQ2K"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



