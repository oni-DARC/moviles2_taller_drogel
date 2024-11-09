import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBK4am7G4ywXr1QvGJvVTAEJzM94W5lt-s",
  authDomain: "aplicaciones-moviles-2.firebaseapp.com",
  projectId: "aplicaciones-moviles-2",
  storageBucket: "aplicaciones-moviles-2.firebasestorage.app",
  messagingSenderId: "764926947876",
  appId: "1:764926947876:web:0c8bd912dcb917ede85eb1",
  measurementId: "G-D4B27FJ7YZ"
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database =getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// export const db = firebase.database();
export{app, analytics, auth, database }