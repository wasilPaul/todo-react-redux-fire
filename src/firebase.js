import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDgFrvM890xU2UVMGL72ZngmuhYOa-ynZA",
    authDomain: "todo-react-redux-38ed4.firebaseapp.com",
    databaseURL: "https://todo-react-redux-38ed4.firebaseio.com",
    projectId: "todo-react-redux-38ed4",
    storageBucket: "todo-react-redux-38ed4.appspot.com",
    messagingSenderId: "170808539057"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()