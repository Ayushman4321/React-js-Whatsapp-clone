import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB60bHq7B9hgxW-df1zA0nI6JzgmcIpEpY",
  authDomain: "whatsapp-clone-a3a02.firebaseapp.com",
  projectId: "whatsapp-clone-a3a02",
  storageBucket: "whatsapp-clone-a3a02.appspot.com",
  messagingSenderId: "674803173898",
  appId: "1:674803173898:web:04078181d6e076476cadf3",
  measurementId: "G-MJZP1GTKT8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore()

export { auth, provider }
export default db;