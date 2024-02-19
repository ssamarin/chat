import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import App from './Components/App';
import './style/index.scss';

firebase.initializeApp({
  apiKey: "AIzaSyDXedfcgOUwZ6Z6PAKB20kn3QNfHRq4A7Y",
  authDomain: "chat-react-eaaf4.firebaseapp.com",
  projectId: "chat-react-eaaf4",
  storageBucket: "chat-react-eaaf4.appspot.com",
  messagingSenderId: "18262172915",
  appId: "1:18262172915:web:bed1176494af50aed94386",
  measurementId: "G-4WHR05VHM4"
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore,
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
