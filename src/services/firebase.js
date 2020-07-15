import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyADtlXdLIrFm-6-YOR4CizzqwlV4hRIwE4",
    authDomain: "textin-textin.firebaseapp.com",
    databaseURL: "https://textin-textin.firebaseio.com",
    projectId: "textin-textin",
    storageBucket: "textin-textin.appspot.com",
    messagingSenderId: "624544357119",
    appId: "1:624544357119:web:e3d7024b4ce0818cfe0aca",
    measurementId: "G-WMNT661ER1"
};

firebase.initializeApp(config);

const auth = firebase.auth;
const db = firebase.database();

export default firebase;