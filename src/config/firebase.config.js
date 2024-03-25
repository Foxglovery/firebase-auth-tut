import {getApp, getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD5mCxPJNtDj0rKhBGo3o1Odbz0JavzcJk",
    authDomain: "fir-auth-tut-d1efe.firebaseapp.com",
    projectId: "fir-auth-tut-d1efe",
    storageBucket: "fir-auth-tut-d1efe.appspot.com",
    messagingSenderId: "302897245946",
    appId: "1:302897245946:web:1909b32139c6892a5c6343"
  };

//get list of apps
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };