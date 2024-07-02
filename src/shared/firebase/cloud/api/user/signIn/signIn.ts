import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { setUser } from "src/shared/slices/UserSlice/userSlice.ts";
import { UserConfig } from "src/shared/types/user/userConfig";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";
import { useState } from "react";

interface userSignIn {
    email: string;
    password: string;
}

export const signIn = async (user: userSignIn) => {
    const { email, password } = user;

    const [signUser, setSignUser] = useState<Nullable<UserConfig>>(null);
    const [signError, setSignError] = useState<Nullable<string>>(null);

    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(({ user }) => {
            setUser({ email: user.email, userId: user.uid });
            setSignUser({ userId: user.uid, email });
        })
        .catch((err) => {
            setSignError(err.code);
        });

    return {
        userData: signUser,
        error: signError,
    };
};
