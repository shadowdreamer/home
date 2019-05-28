import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlooijYtuTLuQxHqE0UFFyEmlyUxnnyc0",
    authDomain: "curedovahkiin.firebaseapp.com",
    databaseURL: "https://curedovahkiin.firebaseio.com",
    projectId: "curedovahkiin",
    storageBucket: "curedovahkiin.appspot.com",
    messagingSenderId: "88741181350",
    appId: "1:88741181350:web:18bafeab73502b62"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore()
  export const auth = firebase.auth()