import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// var config = {
//   apiKey: "AIzaSyCREQMYIbAYKscrS_JYvWP4KpMsF_jI5Bg",
//   authDomain: "react-slack-clone.firebaseapp.com",
//   databaseURL: "https://react-slack-clone.firebaseio.com",
//   projectId: "react-slack-clone",
//   storageBucket: "react-slack-clone.appspot.com",
//   messagingSenderId: "423395756405"
// };

const config = {
 apiKey: "AIzaSyAKBKFUOmRVBD12ybIumITpeSPyyFPKPaE",
  authDomain: "cc-chat-a08ee.firebaseapp.com",
  databaseURL: "https://cc-chat-a08ee.firebaseio.com",
  projectId: "cc-chat-a08ee",
  storageBucket: "cc-chat-a08ee.appspot.com",
  messagingSenderId: "1006209244610",
  appId: "1:1006209244610:web:c3ffeb9b2a0686f7df8a5b",
  measurementId: "G-5PQS56JS6C"
};

firebase.initializeApp(config);

export default firebase;
 