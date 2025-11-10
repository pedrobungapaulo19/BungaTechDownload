
// Firebase v9+
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAViL6k3FmjtvDgQjO9lRKZ55zYTZE3lW4",
  authDomain: "bunga-tech-site-de-download.firebaseapp.com",
  projectId: "bunga-tech-site-de-download",
  storageBucket: "bunga-tech-site-de-download.firebasestorage.app",
  messagingSenderId: "75070741998",
  appId: "1:75070741998:web:2874453d8a21aae5f242ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider, signInWithPopup, storage };