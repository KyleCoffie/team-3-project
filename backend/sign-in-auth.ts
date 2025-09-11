import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
<<<<<<< HEAD

/** Firebase app initialization for testing */
const app = initializeApp({
  apiKey: 'AIzaSyDnbB8w5ptAxE8HD60Pgypt1HZKmqGSFvY',
  authDomain: 'rao-rentals.firebaseapp.com',
=======
import * as dotenv from 'dotenv';

dotenv.config();

/** Firebase app initialization for testing */
const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
});

/** Firebase Authentication */
const auth = getAuth(app);

<<<<<<< HEAD
signInWithEmailAndPassword(auth, 'cam-stanley@example.com', 'test123').then(
  async (userCred) => {
    const token = await userCred.user.getIdToken();
    console.log('Firebase ID Token:', token);
  },
);
=======
async function signInAndGetAdminToken(email: string, password: string) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);

  const token = await userCred.user.getIdToken(true);

  console.log('Firebase ID Token with custom claims:', token);

  return token;
}

signInAndGetAdminToken('test@test.com', 'test123');
>>>>>>> d2e94048e8728d36e6d24fc43c23638096f53ceb
