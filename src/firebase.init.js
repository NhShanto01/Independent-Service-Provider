// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ5Qao_EQKxWI2Qd7kr-eH1PjzSzYmtiI",
  authDomain: "edu-phillip.firebaseapp.com",
  projectId: "edu-phillip",
  storageBucket: "edu-phillip.appspot.com",
  messagingSenderId: "971253109214",
  appId: "1:971253109214:web:d856ddd4c344e76b21cd4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;