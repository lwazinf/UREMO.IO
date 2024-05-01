import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhKkFcFJbLpO3XbmuwjyCVNTEWWfowrQk",
  authDomain: "uremoio.firebaseapp.com",
  projectId: "uremoio",
  storageBucket: "uremoio.appspot.com",
  messagingSenderId: "970942919074",
  appId: "1:970942919074:web:7a9f32dd6f854527d842fb"
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const auth = getAuth(app);
const db = getFirestore(app);
const store = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, store, auth, analytics, provider };
