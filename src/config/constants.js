import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAwisMS7s7484azxjKPRvgHkP0hX-qKJ8g",
    authDomain: "matano-5b3d0.firebaseapp.com",
    databaseURL: "https://matano-5b3d0.firebaseio.com",
    projectId: "matano-5b3d0",
    storageBucket: "matano-5b3d0.appspot.com",
    messagingSenderId: "194876811926"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;