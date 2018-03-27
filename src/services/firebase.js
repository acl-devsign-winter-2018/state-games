import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyCKVeutcfoOR33Nk39zQa0h3i1JjSctPbg',
  authDomain: 'the-scape-game.firebaseapp.com',
  databaseURL: 'https://the-scape-game.firebaseio.com',
  projectId: 'the-scape-game',
  storageBucket: 'the-scape-game.firebaseapp.com',
  messagingSenderId: '189843773696'
};


const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); 
export const storage = firebase.storage(); 
export const auth = firebaseApp.auth(); 

export const providers = firebase.auth;