export enum FirebaseAuthErrorCode {
    InvalidEmail = "auth/invalid-email",
    UserDisabled = "auth/user-disabled",
    UserNotFound = "auth/user-not-found",
    WrongPassword = "auth/wrong-password",
    InvalidCredential = "auth/invalid-credential",
}

export const errorMessages: { [key in FirebaseAuthErrorCode]: string } = {
    [FirebaseAuthErrorCode.InvalidEmail]: "Invalid email address format.",
    [FirebaseAuthErrorCode.UserDisabled]: "User account is disabled.",
    [FirebaseAuthErrorCode.UserNotFound]: "No user found with this email.",
    [FirebaseAuthErrorCode.WrongPassword]: "Incorrect password.",
    [FirebaseAuthErrorCode.InvalidCredential]: "Invalid credential.",
};

export const getFirebaseAuthErrorMessage = (errorCode: string): string => {
    const code = FirebaseAuthErrorCode[errorCode as keyof typeof FirebaseAuthErrorCode];
    return code ? errorMessages[code] : "An unknown error occurred. Please try again.";
};
