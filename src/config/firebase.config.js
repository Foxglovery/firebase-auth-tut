import {getApp, getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {

  };

//get list of apps
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
