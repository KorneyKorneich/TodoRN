import { FIREBASE_AUTH } from "src/shared/firebase/cloud";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setUser } from "src/shared/slices/UserSlice/userSlice.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { useState } from "react";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";
import { UserConfig } from "src/shared/types/user/userConfig.ts";

interface userCreationProps {
    email: string;
    password: string;
}

export const createUser = async (user: userCreationProps) => {
    const { email, password } = user;
    const [creationError, setCreationError] = useState<Nullable<string>>(null);
    const [creationUser, setCreationUser] = useState<Nullable<UserConfig>>(null);
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(({ user }) => {
            setUser({ email: user.email, userId: user.uid });
            setCreationUser({ userId: user.uid, email: email });
        })
        .catch((err) => {
            setCreationError(err.code);
        });

    return {
        userData: creationUser,
        error: creationError,
    };
};
