import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCbimgM8LSXmp_0BsEiW5jGGeorBChgQik',
  authDomain: 'clone-4d0f0.firebaseapp.com',
  databaseURL: 'https://clone-4d0f0-default-rtdb.firebaseio.com',
  projectId: 'clone-4d0f0',
  storageBucket: 'clone-4d0f0.appspot.com',
  messagingSenderId: '888280655278',
  appId: '1:888280655278:web:630b24e5006be376e0d43f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
