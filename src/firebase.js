import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBaEv25DFS57GzMD31BplW-fBEs9Uq9QD0",
    authDomain: "vue-firebase-app.firebaseapp.com",
    databaseURL: "https://vue-firebase-app.firebaseio.com",
    projectId: "vue-firebase-app",
    storageBucket: "vue-firebase-app.appspot.com",
    messagingSenderId: "1001861385170"
  };
  
let app = Firebase.initializeApp(config);

export const db = app.database();