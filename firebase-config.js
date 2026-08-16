import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMptdLpLEdbeVFKZj82M0gyoV2m_2y5Pk",
  authDomain: "suchartstudio-9a78d.firebaseapp.com",
  databaseURL: "https://suchartstudio-9a78d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suchartstudio-9a78d",
  storageBucket: "suchartstudio-9a78d.firebasestorage.app",
  messagingSenderId: "953369646185",
  appId: "1:953369646185:web:d2c4fd362b1023ee6ebef8",
  measurementId: "G-2DQXJSQLRM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, doc, setDoc };