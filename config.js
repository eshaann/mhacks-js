const firebase = require("firebase");
//const { Model } = require("firebase-admin/machine-learning");

const firebaseConfig = {
  apiKey: "AIzaSyC3reXZTmT4NeeGfrtAWMppT2BaxnDFy9I",
  authDomain: "mhacks17typeshit.firebaseapp.com",
  projectId: "mhacks17typeshit",
  storageBucket: "mhacks17typeshit.appspot.com",
  messagingSenderId: "795165453533",
  appId: "1:795165453533:web:39289f7c37c350d80b7f34",
  measurementId: "G-Y7P1NH74ZF"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");

const File = db.collection("Files");

module.exports = {User, File};