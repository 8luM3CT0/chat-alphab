import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCH5pp8mHXdq58A96YT4CHdk6exmb1gdwU',
  authDomain: 'chat-alphab.firebaseapp.com',
  projectId: 'chat-alphab',
  storageBucket: 'chat-alphab.appspot.com',
  messagingSenderId: '470524645904',
  appId: '1:470524645904:web:5a87c5a42aaba283307095',
  measurementId: 'G-L9D9BZRHYF'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const creds = app.auth()
const store = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
const warehouse = app.storage()

export { creds, provider, store, warehouse }
