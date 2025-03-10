import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyBGchCubXovU3hGPr7GfGbgoNKIMRI26Zc",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

// const firebaseConfig = {
//   apiKey: "AIzaSyBGchCubXovU3hGPr7GfGbgoNKIMRI26Zc",
//   authDomain: "memoapp-ecc9a.firebaseapp.com",
//   projectId: "memoapp-ecc9a",
//   storageBucket: "memoapp-ecc9a.firebasestorage.app",
//   messagingSenderId: "506635628211",
//   appId: "1:506635628211:web:786ab6a27678f2d3850ac6"
// }


// firebaseのアプリの初期化
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)
export { app, auth, db }
