import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBn4WHN1IVB1ksueoJdMg-JFermZbBc6IE",
    authDomain: "expenseapp-7ca19.firebaseapp.com",
    databaseURL: "https://expenseapp-7ca19.firebaseio.com",
    projectId: "expenseapp-7ca19",
    storageBucket: "expenseapp-7ca19.appspot.com",
    messagingSenderId: "487312368697",
    appId: "1:487312368697:web:cdffadcb3a7da4086dd9e8",
    measurementId: "G-VFQQ2NWX6Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const database=firebase.database();
  export {firebase, database as default}; //to use in our other file