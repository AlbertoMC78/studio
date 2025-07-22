'use client';

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'web-dev-pro-ugufi',
  appId: '1:803404324879:web:d21a22cfbaf3d1596f837a',
  storageBucket: 'web-dev-pro-ugufi.firebasestorage.app',
  apiKey: 'AIzaSyA2y39yfX7rXXx4DfOjpgUqV9r1t6HJeIw',
  authDomain: 'web-dev-pro-ugufi.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '803404324879',
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);

export { app, auth };
