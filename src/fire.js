import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDQzPvmo3h0uoRW8nrH7OFB11XbIDt5mSs",
    authDomain: "eshop-be415.firebaseapp.com",
    projectId: "eshop-be415",
    storageBucket: "eshop-be415.appspot.com",
    messagingSenderId: "669034980169",
    appId: "1:669034980169:web:6ee07c00dd1299fce23098"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  export default auth;
  