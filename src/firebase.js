import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC6g0Uagj1ydW-qkowcL2H8o_zhxq5T_ck",
    authDomain: "fir-notification-ex-f5bb1.firebaseapp.com",
    databaseURL: "https://fir-notification-ex-f5bb1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-notification-ex-f5bb1",
    storageBucket: "fir-notification-ex-f5bb1.appspot.com",
    messagingSenderId: "812519291887",
    appId: "1:812519291887:web:8732f17544499a58d1541a",
    measurementId: "G-SFE6V41L6Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const logout = () => auth.signOut();
export const storage = getStorage(app);