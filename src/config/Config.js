import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyB7Ail4DDFsy4N4Cz9WY6g8rNUnZ1ShOqQ',
  authDomain: 'gs-app-testing.firebaseapp.com',
  projectId: 'gs-app-testing',
  storageBucket: 'gs-app-testing.appspot.com',
  messagingSenderId: '788617826347',
  appId: '1:788617826347:web:4e4991390d20059b581a6e'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// var firebaseConfig = {
//   apiKey: 'AIzaSyD5KApJY7Zv85MJEZOj4In8a5qS6shnWFw',
//   authDomain: 'simple-auth-application.firebaseapp.com',
//   projectId: 'simple-auth-application',
//   storageBucket: 'simple-auth-application.appspot.com',
//   messagingSenderId: '507648793298',
//   appId: '1:507648793298:web:89084e02bcd7bb5df46b0b'
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const fs = getFirestore(app);
// const storage = getStorage(app);

// export { auth, fs, storage };
