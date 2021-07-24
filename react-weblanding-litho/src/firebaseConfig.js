import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBqyAgfapjEmBQULii9ZSMFqFoVRWFAS9o",
    authDomain: "valid-banner-298405.firebaseapp.com",
    projectId: "valid-banner-298405",
    storageBucket: "valid-banner-298405.appspot.com",
    messagingSenderId: "274604659606",
    appId: "1:274604659606:web:9269c4de08c8515e93c3b7"
  }; 
      // Initialize Firebase
      const fb = firebase.initializeApp(firebaseConfig);
      // export const fire = firebase 
      export const auth =  fb.auth();
      export const db =  fb.firestore();
