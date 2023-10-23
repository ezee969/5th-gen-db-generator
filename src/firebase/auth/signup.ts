import firebase_app from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(firebase_app);

// Hay una advertencia en la consola que proviene de esta funcion, ver si da problemas luego en el build
export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
