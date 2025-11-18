import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKlbZ_aBQFjZGZgri8Cn7ZUG4uHN6ovEM",
    authDomain: "full-stack-react-48f5c.firebaseapp.com",
    projectId: "full-stack-react-48f5c",
    storageBucket: "full-stack-react-48f5c.firebasestorage.app",
    messagingSenderId: "631246657487",
    appId: "1:631246657487:web:bc38e7de3bbf497f5864ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
