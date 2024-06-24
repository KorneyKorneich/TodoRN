import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignUp.styles.ts";
import Union from "src/shared/assets/icons/Union.svg";
import { PasswordInput } from "src/shared/ui/Inputs/PasswordInput/PasswordInput.tsx";
import { useState } from "react";
import { AppInput } from "src/shared/ui/Inputs/AppInput/AppInput.tsx";
import { UserSignUpConfig } from "src/shared/types/user/userConfig.ts";
import { AuthButton } from "src/shared/ui/Buttons/AuthButton/AuthButton.tsx";
import { NavigationProps } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { createUser } from "src/shared/firebase/cloud/api/user/createUser/createUser.ts";
import { getFirebaseAuthErrorMessage } from "src/shared/helpers/getAuthError.ts";

interface ErrorConfig {
    password?: string;
    email?: string;
    repeatPassword?: string;
    username?: string;
    passwordsNotMatch?: string;
    firebaseError?: string;
    noErrors: boolean;
}

export const SignUp = ({ navigation }: NavigationProps) => {
    const [userInfoSignUp, setUserInfoSignUp] = useState<UserSignUpConfig>({
        password: null,
        email: null,
        repeatPassword: null,
    });
    const [errors, setErrors] = useState<ErrorConfig>({ noErrors: false });

    const handleEmailChange = (email: string) => {
        setErrors({ ...errors, email: undefined, firebaseError: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, email: email });
    };

    const handlePasswordChange = (password: string) => {
        setErrors({ ...errors, password: undefined, firebaseError: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, password: password });
    };

    const handlePasswordConfirmChange = (password: string) => {
        setErrors({ ...errors, repeatPassword: undefined, firebaseError: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, repeatPassword: password });
    };

    const validate = (): boolean => {
        const newErrors: ErrorConfig = { noErrors: true };
        const requiredFields: Partial<Record<keyof UserSignUpConfig, string>> = {
            email: "Email is required",
            password: "Password is required",
            repeatPassword: "Password confirmation is required",
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        Object.keys(requiredFields).forEach((field) => {
            const key = field as keyof UserSignUpConfig;
            if (!userInfoSignUp[key]) {
                newErrors[key] = requiredFields[key]!;
                newErrors.noErrors = false;
            }
        });

        if (userInfoSignUp.password && userInfoSignUp.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            newErrors.noErrors = false;
        }

        if (userInfoSignUp.email && !emailRegex.test(userInfoSignUp.email)) {
            newErrors.email = "Invalid email format";
            newErrors.noErrors = false;
        }

        if (
            userInfoSignUp.password &&
            userInfoSignUp.repeatPassword &&
            userInfoSignUp.password !== userInfoSignUp.repeatPassword
        ) {
            newErrors.passwordsNotMatch = "Passwords do not match";
            newErrors.noErrors = false;
        }

        setErrors(newErrors);
        return newErrors.noErrors;
    };

    const handleSignUp = async () => {
        const isValid = validate();
        if (isValid) {
            const errorMessage = await createUser({
                email: userInfoSignUp.email!,
                password: userInfoSignUp.password!,
            });

            if (errorMessage) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    firebaseError: getFirebaseAuthErrorMessage(errorMessage),
                }));
            }
        }
    };

    const handleToSignIn = () => {
        navigation.navigate("SignIn");
    };

    return (
        <>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Union />
                    </View>
                    <View style={styles.signUpForm}>
                        <AppInput
                            placeholder="Email"
                            value={userInfoSignUp.email}
                            setValue={handleEmailChange}
                        />
                        {errors.email && <Text style={styles.invalidInput}>{errors.email}</Text>}
                        <PasswordInput
                            placeholder="Password"
                            value={userInfoSignUp.password}
                            setValue={handlePasswordChange}
                        />
                        {errors.password && (
                            <Text style={styles.invalidInput}>{errors.password}</Text>
                        )}
                        <PasswordInput
                            placeholder="Confirm Password"
                            value={userInfoSignUp.repeatPassword}
                            setValue={handlePasswordConfirmChange}
                        />
                        {errors.repeatPassword && (
                            <Text style={styles.invalidInput}>{errors.repeatPassword}</Text>
                        )}
                        {errors.passwordsNotMatch && (
                            <Text style={styles.invalidInput}>{errors.passwordsNotMatch}</Text>
                        )}
                        {errors.firebaseError && (
                            <Text style={styles.invalidInput}>{errors.firebaseError}</Text>
                        )}
                    </View>
                    <AuthButton onPress={handleSignUp} buttonTitle="SIGN UP" />
                    <View style={styles.toSignInContainer}>
                        <Text style={styles.text}>Already have an account?</Text>
                        <TouchableOpacity onPress={handleToSignIn}>
                            <Text style={styles.toSignUp}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};
