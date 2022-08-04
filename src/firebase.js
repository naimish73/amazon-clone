import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPopyHF4hWZCybRHxfSlYOHE4w1mBJgdI",
    authDomain: "clone-be68e.firebaseapp.com",
    projectId: "clone-be68e",
    storageBucket: "clone-be68e.appspot.com",
    messagingSenderId: "5690300316",
    appId: "1:5690300316:web:51eb0d4ef57d4470a59a59",
    measurementId: "G-VKXDC362QR",
});

const auth = firebase.auth();

export { auth };
