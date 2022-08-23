import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDc3KP2MTAnKpKtMWvVxE0XcMJgEyRuxig',
  authDomain: 'interviewproject-d5a58.firebaseapp.com',
  databaseURL: 'https://interviewproject-d5a58.firebaseio.com',
  projectId: 'interviewproject-d5a58',
  storageBucket: 'interviewproject-d5a58.appspot.com',
  messagingSenderId: '324181990640',
  appId: '1:324181990640:web:d06619d4e18d600f147635',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
