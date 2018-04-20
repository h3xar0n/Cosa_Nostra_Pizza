import Firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_lNkhHUlCD90lB7piWhFD0ZUe4zxDEtI",
  authDomain: "cosa-nostra-pizza.firebaseapp.com",
  databaseURL: "https://cosa-nostra-pizza.firebaseio.com",
  projectId: "cosa-nostra-pizza",
  storageBucket: "",
  messagingSenderId: "712760686947"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')