import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignIn.styles.ts";
import Union from "src/shared/assets/icons/Union.svg";
import { PasswordInput } from "src/shared/ui/Inputs/PasswordInput/PasswordInput.tsx";
import { useState } from "react";
import { AppInput } from "src/shared/ui/Inputs/AppInput/AppInput.tsx";
import { UserResponse, UserSignInConfig } from "src/shared/types/user/userConfig.ts";
import { AuthButton } from "src/shared/ui/Buttons/AuthButton/AuthButton.tsx";
import { NavigationProps } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { signIn } from "src/shared/firebase/cloud/api/user/signIn/signIn.ts";
import { ErrorConfig, validateSignIn } from "src/shared/helpers/validates.ts";

export const SignIn = ({ navigation }: NavigationProps) => {
    const [userInfo, setUserInfo] = useState<UserSignInConfig>({
        password: null,
        email: null,
    });
    const [errors, setErrors] = useState<ErrorConfig>({ noErrors: false });

    const handleEmailChange = (email: string) => {
        setUserInfo({ ...userInfo, email: email });
    };

    const handlePasswordChange = (password: string) => {
        setUserInfo({ ...userInfo, password: password });
    };

    const handleSignIn = async () => {
        const errors = validateSignIn(userInfo);
        if (errors.noErrors) {
            const errorMessage: UserResponse = await signIn({
                email: userInfo.email!,
                password: userInfo.password!,
            });

            if (errorMessage.error) {
                setErrors((prevErrors) => ({ ...prevErrors, firebaseError: errorMessage.error }));
            }
        }
    };

    const handleToSignUp = () => {
        navigation.navigate("SignUp");
    };

    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Union />
                </View>
                <View style={styles.signInForm}>
                    {errors.firebaseError && (
                        <Text style={styles.invalidInput}>{errors.firebaseError}</Text>
                    )}
                    <AppInput
                        placeholder="Email"
                        value={userInfo.email}
                        setValue={handleEmailChange}
                    />
                    {errors.email && <Text style={styles.invalidInput}>{errors.email}</Text>}
                    <PasswordInput
                        placeholder="Password"
                        value={userInfo.password}
                        setValue={handlePasswordChange}
                    />
                    {errors.password && <Text style={styles.invalidInput}>{errors.password}</Text>}
                </View>
                <TouchableOpacity>
                    <Text style={styles.text}>Forgot Password?</Text>
                </TouchableOpacity>
                <AuthButton onPress={handleSignIn} buttonTitle="SIGN IN" />
                <View style={styles.toSignUpContainer}>
                    <Text style={styles.text}>Don&apos;t have an account?</Text>
                    <TouchableOpacity onPress={handleToSignUp}>
                        <Text style={styles.toSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
