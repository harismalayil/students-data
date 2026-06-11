import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoGqPG6L1pFxvpvLscyZiFpfJ9ICAc",
  authDomain: "kemhs-student-database.firebaseapp.com",
  projectId: "kemhs-student-database",
  storageBucket: "kemhs-student-database.appspot.com",
  messagingSenderId: "175624447801",
  appId: "1:175624447801:web:5fcde7004f7294ef586ae8"
};

const placeholderValues = new Set([
  "YOUR_API_KEY",
  "YOUR_PROJECT.firebaseapp.com",
  "YOUR_PROJECT",
  "YOUR_PROJECT_ID",
  "YOUR_PROJECT.appspot.com",
  "XXXXXXXX"
]);

export const hasFirebaseConfig = !Object.values(firebaseConfig)
  .some((value) => placeholderValues.has(value));

let app = null;
let db = null;
let storage = null;
let auth = null;

if (hasFirebaseConfig) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  storage = getStorage(app);
  auth = getAuth(app);
}

export { db, storage, auth };