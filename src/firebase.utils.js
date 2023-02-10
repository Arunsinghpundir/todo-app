import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCTogfZwfxk2Dy3AMnG_D2IRuGmqN6AMqg",
  authDomain: "dsa-book.firebaseapp.com",
  projectId: "dsa-book",
  storageBucket: "dsa-book.appspot.com",
  messagingSenderId: "949928441067",
  appId: "1:949928441067:web:3f7a3a72648bae7816baae",
  measurementId: "G-49CMVCJ812",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
