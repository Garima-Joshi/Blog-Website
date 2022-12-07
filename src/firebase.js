// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

//initialize firestore
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAGwAw9vWUATTzo3Kj-bIYf_iPAlqPwQ8I',
  authDomain: 'blog-website-6b49b.firebaseapp.com',
  projectId: 'blog-website-6b49b',
  storageBucket: 'blog-website-6b49b.appspot.com',
  messagingSenderId: '909522539376',
  appId: '1:909522539376:web:8a3726225b2e0ed84cf5b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
