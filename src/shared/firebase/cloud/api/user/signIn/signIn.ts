import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { setIsUserLoading } from "src/shared/slices/UserSlice/userSlice.ts";
import { AppDispatch } from "src/shared/store/store.ts";

interface userSignIn {
    email: string;
    password: string;
}

export const signIn = async (dispatch: AppDispatch, user: userSignIn) => {
    const { email, password } = user;
    dispatch(setIsUserLoading(true));
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(() => {
            dispatch(setIsUserLoading(false));
        })
        .catch((err) => {
            throw err.code;
        });

    return;
};
