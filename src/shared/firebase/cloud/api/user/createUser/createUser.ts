import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface userCreationProps {
    username: string;
    email: string;
    password: string;
}

export const createUser = async (user: userCreationProps) => {
    const { username, email, password } = user;
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password).then(({ user }) => {
        updateProfile(user, { displayName: username });
    });

    return;
};
