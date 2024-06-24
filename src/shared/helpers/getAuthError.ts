export const getFirebaseAuthErrorMessage = (errorCode: string): string => {
    const errorMessages: { [key: string]: string } = {
        "auth/invalid-email": "Invalid email address format.",
        "auth/user-disabled": "User account is disabled.",
        "auth/user-not-found": "No user found with this email.",
        "auth/wrong-password": "Incorrect password.",
        "auth/invalid-credential": "Invalid credential.",
    };

    return errorMessages[errorCode] || "An unknown error occurred. Please try again.";
};
