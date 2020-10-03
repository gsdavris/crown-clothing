import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import directoryComponent from '../components/directory/directory.component';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
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
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

export const  addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
    ) => {
    const collectionRef  = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) =>  {
    const tranformedCollection = collections.docs.map(doc => {
        const {title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items 
        }
    });
    return tranformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



