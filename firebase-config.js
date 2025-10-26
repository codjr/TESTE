// Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Configuração do Firebase (a mesma que você já usa)
const firebaseConfig = {
  apiKey: "AIzaSyB9GusKT_JuumqK_Bhf-X-ZtmUkzZK0lX0",
  authDomain: "vtr-marinha.firebaseapp.com",
  projectId: "vtr-marinha",
  storageBucket: "vtr-marinha.appspot.com",
  messagingSenderId: "503079573653",
  appId: "1:503079573653:web:beb34f57cd5447d376239c"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Auth e Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
