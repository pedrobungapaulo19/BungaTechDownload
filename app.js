
import { auth, provider, signInWithPopup } from './firebase-config.js';

document.getElementById('login-btn').addEventListener('click', async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "Upload.html";
  } catch (error) {
    alert("Erro ao fazer login: " + error.message);
  }
});