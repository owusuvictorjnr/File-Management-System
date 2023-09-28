// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'anu-cfms.firebaseapp.com',
  projectId: 'anu-cfms',
  storageBucket: 'anu-cfms.appspot.com',
  messagingSenderId: '199992966380',
  appId: '1:199992966380:web:f163e0f9a9ca8e703479c9',
  measurementId: 'G-VS6LDYYCWE',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// export default {
//   app,
// }
