import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";

interface userSignIn {
    email: string;
    password: string;
}

export const signIn = async (user: userSignIn) => {
    const { email, password } = user;
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    return;
};
