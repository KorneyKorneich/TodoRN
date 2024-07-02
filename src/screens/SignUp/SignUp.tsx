import React, { useState } from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignUp.styles.ts";
import Union from "src/shared/assets/icons/Union.svg";
import { PasswordInput } from "src/shared/ui/Inputs/PasswordInput/PasswordInput.tsx";
import { AppInput } from "src/shared/ui/Inputs/AppInput/AppInput.tsx";
import { AuthButton } from "src/shared/ui/Buttons/AuthButton/AuthButton.tsx";
import { NavigationProps } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { createUser } from "src/shared/firebase/cloud/api/user/createUser/createUser.ts";
import { getFirebaseAuthErrorMessage } from "src/shared/helpers/getAuthError.ts";
import { ErrorConfig, validateSignUp } from "src/shared/helpers/validates.ts";
import { UserResponse } from "src/shared/types/user/userConfig.ts";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

export interface UserSignUpConfig {
    email: Nullable<string>;
    password: Nullable<string>;
    repeatPassword: Nullable<string>;
}

export const SignUp = ({ navigation }: NavigationProps) => {
    const [userInfoSignUp, setUserInfoSignUp] = useState<UserSignUpConfig>({
        email: null,
        password: null,
        repeatPassword: null,
    });
    const [errors, setErrors] = useState<ErrorConfig>({});

    const handleEmailChange = (email: string) => {
        setErrors((prevErrors) => ({ ...prevErrors, email: undefined, firebaseError: undefined }));
        setUserInfoSignUp((prevInfo) => ({ ...prevInfo, email }));
    };

    const handlePasswordChange = (password: string) => {
        setErrors(() => ({
            ...errors,
            password: undefined,
            firebaseError: undefined,
        }));
        setUserInfoSignUp((prevInfo) => ({ ...prevInfo, password }));
    };

    const handlePasswordConfirmChange = (password: string) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            repeatPassword: undefined,
            firebaseError: undefined,
        }));
        setUserInfoSignUp((prevInfo) => ({ ...prevInfo, repeatPassword: password }));
    };

    const handleSignUp = async () => {
        const errors = validateSignUp(userInfoSignUp);
        if (errors.noErrors) {
            const response: UserResponse = await createUser({
                email: userInfoSignUp.email!,
                password: userInfoSignUp.password!,
            });

            if (response.error !== null) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    firebaseError: getFirebaseAuthErrorMessage(response.error),
                }));
            }
        }
    };

    const handleToSignIn = () => {
        navigation.navigate("SignIn");
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Union />
                </View>
                <View style={styles.signUpForm}>
                    <AppInput
                        placeholder="Email"
                        value={userInfoSignUp.email || ""}
                        setValue={handleEmailChange}
                    />
                    {errors.email && <Text style={styles.invalidInput}>{errors.email}</Text>}
                    <PasswordInput
                        placeholder="Password"
                        value={userInfoSignUp.password || ""}
                        setValue={handlePasswordChange}
                    />
                    {errors.password && <Text style={styles.invalidInput}>{errors.password}</Text>}
                    <PasswordInput
                        placeholder="Confirm Password"
                        value={userInfoSignUp.repeatPassword || ""}
                        setValue={handlePasswordConfirmChange}
                    />
                    {errors.repeatPassword && (
                        <Text style={styles.invalidInput}>{errors.repeatPassword}</Text>
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
    );
};
