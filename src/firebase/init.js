import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA_3bqI2MtxF38iCup4wTHbJyiIn8WyH-4",
  authDomain: "vue-chatapp-c4572.firebaseapp.com",
  databaseURL: "https://vue-chatapp-c4572.firebaseio.com",
  projectId: "vue-chatapp-c4572",
  storageBucket: "vue-chatapp-c4572.appspot.com",
  messagingSenderId: "307445051131",
  appId: "1:307445051131:web:bc815ef631d3a7aa9f0a5e",
  measurementId: "G-YQVMR758D1",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
