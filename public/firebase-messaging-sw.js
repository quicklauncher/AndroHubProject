importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdG1InVWd_nf9L0A77rL23L_hRRnYKNPI",
    authDomain: "androhub-2b873.firebaseapp.com",
    databaseURL: "https://androhub-2b873.firebaseio.com",
    projectId: "androhub-2b873",
    storageBucket: "androhub-2b873.appspot.com",
    messagingSenderId: "515237248825",
    appId: "1:515237248825:web:8a891adee8182b4802f2e8",
    measurementId: "G-1T5M7KETK3"
  };
 

  firebase.initializeApp(config);
  const messaging = firebase.messaging();