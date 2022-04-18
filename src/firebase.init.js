// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLpGeZu5p6UmjgqHBr6tub1dOJSaXi1_U",
  authDomain: "independent-service-prov-1dd05.firebaseapp.com",
  projectId: "independent-service-prov-1dd05",
  storageBucket: "independent-service-prov-1dd05.appspot.com",
  messagingSenderId: "387625925876",
  appId: "1:387625925876:web:fa73938b5568977156f2a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;