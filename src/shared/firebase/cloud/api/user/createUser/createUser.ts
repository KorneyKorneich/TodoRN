import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setIsUserLoading } from "src/shared/slices/UserSlice/userSlice.ts";
import { AppDispatch } from "src/shared/store/store.ts";

interface userCreationProps {
    email: string;
    password: string;
}

export const createUser = async (dispatch: AppDispatch, user: userCreationProps) => {
    const { email, password } = user;
    dispatch(setIsUserLoading(true));
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(async () => {
            dispatch(setIsUserLoading(false));
        })
        .catch((err) => {
            throw err.code;
        });

    return;
};
