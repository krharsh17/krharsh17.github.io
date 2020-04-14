import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAPM0URFjA5JR23PBi8ZiEaQGEk4lSxsfs",
    authDomain: "kumar-harsh.firebaseapp.com",
    databaseURL: "https://kumar-harsh.firebaseio.com",
    projectId: "kumar-harsh",
    storageBucket: "kumar-harsh.appspot.com",
    messagingSenderId: "217384912675",
    appId: "1:217384912675:web:d5255b1e7d57f4d56f6e96",
    measurementId: "G-2M3PH9E3KV"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
