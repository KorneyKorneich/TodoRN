import { EMAIL_REGEX } from "src/shared/consts/const.ts";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";
import { UserSignInConfig } from "src/shared/types/user/userConfig.ts";
import { UserSignUpConfig } from "src/screens/SignUp/SignUp.tsx";

export interface ErrorConfig {
    password?: string;
    email?: string;
    repeatPassword?: string;
    firebaseError?: string;
    noErrors?: boolean;
}

export const validateSignUp = (userInfoSignUp: UserSignUpConfig) => {
    const newErrors: ErrorConfig = {};

    const emailError = validateEmail(userInfoSignUp.email || "");
    if (emailError) {
        newErrors.email = emailError;
    }

    const passwordError = validatePassword(userInfoSignUp.password || "");
    if (passwordError) {
        newErrors.password = passwordError;
    }

    const passwordConfirmationError = validatePasswordConfirmation(
        userInfoSignUp.password || "",
        userInfoSignUp.repeatPassword || "",
    );
    if (passwordConfirmationError) {
        newErrors.repeatPassword = passwordConfirmationError;
    }
    if (Object.keys(newErrors).length === 0) newErrors.noErrors = true;
    return newErrors;
    // return Object.keys(newErrors).length === 0;
};

export const validateSignIn = (userInfo: UserSignInConfig) => {
    const newErrors: ErrorConfig = { noErrors: true };

    const emailError = validateEmail(userInfo.email);
    if (emailError) {
        newErrors.email = emailError;
        newErrors.noErrors = false;
    }

    const passwordError = validatePassword(userInfo.password);
    if (passwordError) {
        newErrors.password = passwordError;
        newErrors.noErrors = false;
    }

    return newErrors;
};

export const validateEmail = (email: Nullable<string>): string | null => {
    if (email === null) {
        return "Email is required";
    }
    if (!EMAIL_REGEX.test(email)) {
        return "Invalid email format";
    }
    return null;
};

export const validatePassword = (password: Nullable<string>): string | null => {
    if (password === null) {
        return "Password is required";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters long";
    }
    return null;
};

export const validatePasswordConfirmation = (
    password: Nullable<string>,
    repeatPassword: Nullable<string>,
): string | null => {
    if (repeatPassword === null) {
        return "Password confirmation is required";
    }
    if (password !== repeatPassword) {
        return "Passwords do not match";
    }
    return null;
};
