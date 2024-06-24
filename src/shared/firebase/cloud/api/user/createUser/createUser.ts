import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setUser } from "src/shared/slices/UserSlice/userSlice.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";

interface userCreationProps {
    email: string;
    password: string;
}

export const createUser = async (user: userCreationProps) => {
    const { email, password } = user;
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(async ({ user }) => {
            setUser({ email: user.email });
        })
        .catch((err) => {
            throw err.code;
        });

    return;
};
