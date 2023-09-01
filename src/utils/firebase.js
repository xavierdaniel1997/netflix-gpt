// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmXr3kpX7BJJPyuykQ1nDxy5959wXVvdA",
  authDomain: "netflix-gpt-d69d5.firebaseapp.com",
  projectId: "netflix-gpt-d69d5",
  storageBucket: "netflix-gpt-d69d5.appspot.com",
  messagingSenderId: "296238081818",
  appId: "1:296238081818:web:989a68faf749a537b62ea3",
  measurementId: "G-LLPHY4KSXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();