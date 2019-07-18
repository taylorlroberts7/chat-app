import firebase from 'firebase/app';
import 'firebase/database';

// Normally I would store these values in environemnt variables
// but in this case I am hard coding them so it can be run locally :)

const firebaseConfig = {
    apiKey: "AIzaSyDQzxEdt1qWwvYw1ozNwouLfWMcT_rn8rY",
    authDomain: "chat-app-7473d.firebaseapp.com",
    databaseURL: "https://chat-app-7473d.firebaseio.com",
    projectId: "chat-app-7473d",
    storageBucket: "",
    messagingSenderId: "838847682320",
    appId: "1:838847682320:web:16b9da8e5ac07ce7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database, firebase };
