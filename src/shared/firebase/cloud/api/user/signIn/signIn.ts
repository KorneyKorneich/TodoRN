import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { setUser } from "src/shared/slices/UserSlice/userSlice.ts";

interface userSignIn {
    email: string;
    password: string;
}

export const signIn = async (user: userSignIn) => {
    const { email, password } = user;

    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(({ user }) => {
            setUser({ email: user.email });
        })
        .catch((err) => {
            throw err.code;
        });

    return;
};
