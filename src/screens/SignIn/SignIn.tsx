import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import styles from "./SignIn.styles.ts";
import Union from "src/shared/assets/icons/Union.svg";
import { PasswordInput } from "src/shared/ui/Inputs/PasswordInput/PasswordInput.tsx";
import { useState } from "react";
import { AppInput } from "src/shared/ui/Inputs/AppInput/AppInput.tsx";
import { UserSignInConfig } from "src/shared/types/user/userConfig.ts";
import { AuthButton } from "src/shared/ui/Buttons/AuthButton/AuthButton.tsx";
import { NavigationProps } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { signIn } from "src/shared/firebase/cloud/api/user/signIn/signIn.ts";
import { getFirebaseAuthErrorMessage } from "src/shared/helpers/getAuthError.ts";

interface ErrorConfig {
    password?: string;
    email?: string;
    noErrors?: boolean;
    firebaseError?: string;
}

export const SignIn = ({ navigation }: NavigationProps) => {
    const [userInfo, setUserInfo] = useState<UserSignInConfig>({
        password: null,
        email: null,
    });
    const [errors, setErrors] = useState<ErrorConfig>();

    const handleEmailChange = (email: string) => {
        setErrors({ ...errors, email: undefined, firebaseError: undefined });
        setUserInfo({ ...userInfo, email: email });
    };
    const handlePasswordChange = (password: string) => {
        setErrors({ ...errors, password: undefined, firebaseError: undefined });
        setUserInfo({ ...userInfo, password: password });
    };

    const validate = () => {
        setErrors({});
        const newErrors: ErrorConfig = {};
        const requiredFields: Partial<Record<keyof UserSignInConfig, string>> = {
            email: "Email is required",
            password: "Password is required",
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        Object.keys(requiredFields).forEach((field) => {
            const key = field as keyof UserSignInConfig;
            if (!userInfo[key]) {
                newErrors[key] = requiredFields[key]!;
            }
        });

        if (userInfo.password && userInfo.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        if (userInfo.email && !emailRegex.test(userInfo.email)) {
            newErrors.email = "Invalid email format";
        }

        if (Object.keys(newErrors).length === 0) {
            newErrors.noErrors = true;
        }

        setErrors(newErrors);
    };

    const handleSingIn = async () => {
        validate();
        errors?.noErrors
            ? await signIn({
                  email: userInfo.email!,
                  password: userInfo.password!,
              }).catch((errCode) => {
                  console.log(getFirebaseAuthErrorMessage(errCode));
                  setErrors({ ...errors, firebaseError: getFirebaseAuthErrorMessage(errCode) });
              })
            : null;
    };
    const handleToSingUp = () => {
        navigation.navigate("SignUp");
    };

    return (
        <>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Union />
                    </View>
                    <View style={styles.singInForm}>
                        {errors?.firebaseError && (
                            <Text style={styles.invalidInput}>{errors.firebaseError}</Text>
                        )}
                        <AppInput
                            placeholder={"Email"}
                            value={userInfo.email}
                            setValue={handleEmailChange}
                        />
                        {errors?.email && <Text style={styles.invalidInput}>{errors.email}</Text>}
                        <PasswordInput
                            placeholder={"Password"}
                            value={userInfo.password}
                            setValue={handlePasswordChange}
                        />
                        {errors?.password && (
                            <Text style={styles.invalidInput}>{errors.password}</Text>
                        )}
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.text}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <AuthButton onPress={handleSingIn} buttonTitle={"SING IN"} />
                    <View style={styles.toSingUpContainer}>
                        <Text style={styles.text}>Don&apos;t have an account?</Text>
                        <TouchableOpacity onPress={handleToSingUp}>
                            <Text style={styles.toSingUp}>Sing Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};
