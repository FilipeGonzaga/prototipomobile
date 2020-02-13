import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBofvMb-_Sty42upS7WIP-OVXHPpIiioYY",
    authDomain: "love-3e9d0.firebaseapp.com",
    databaseURL: "https://love-3e9d0.firebaseio.com",
    projectId: "love-3e9d0",
    storageBucket: "love-3e9d0.appspot.com",
    messagingSenderId: "984641403922",
    appId: "1:984641403922:web:910f2e6f2a9d333a792ccb"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);