import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCYX4AlONZ_kFy6RgfQH0RlfQzSVc5NSqo",
  authDomain: "phoneotp-9a211.firebaseapp.com",
  projectId: "phoneotp-9a211",
  storageBucket: "phoneotp-9a211.appspot.com",
  messagingSenderId: "906647952569",
  appId: "1:906647952569:web:541277b2033223f7b24f68",
  measurementId: "G-BN2VNF2K1B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
