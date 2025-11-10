
import { storage } from './firebase-config.js';
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

document.getElementById("uploadBtn").addEventListener("click", async () => {
  const file = document.getElementById("fileInput").files[0];
  if (!file) return alert("Escolha o aplicativo");

  const fileRef = ref(storage, 'uploads/' + file.name);

  try {
    await uploadBytes(fileRef, file);
    document.getElementById("status").innerText = "Upload realizado com sucesso!";
  } catch (error) {
    document.getElementById("status").innerText = "Erro no upload: " + error.message;
  }
});
