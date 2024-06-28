import { EMAIL_REGEX } from "src/shared/consts/const.ts";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

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
