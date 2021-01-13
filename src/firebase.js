import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAfoqyI-0VqzMQl913aFy0lAy0nSL7WtDM",
    authDomain: "sunday-website.firebaseapp.com",
    projectId: "sunday-website",
    storageBucket: "sunday-website.appspot.com",
    messagingSenderId: "887238258792",
    appId: "1:887238258792:web:e9bd557704927181ea0bdd",
    measurementId: "G-PSRN5XCDN0"
};
// Initialize Firebase
firebase.initializeApp(config);
export const db = firebase.firestore()
export default firebase;