import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(config);

const auth = firebase.auth;
const db = firebase.database();

export default firebase;
