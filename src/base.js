import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBziVIg70ALa5CPVCD4qtZ0S_yG2Bwlub8",
  authDomain: "catch-of-the-day-d560a.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-d560a.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
