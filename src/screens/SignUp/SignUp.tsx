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

interface ErrorConfig {
    password?: string;
    email?: string;
    repeatPassword?: string;
    username?: string;
    passwordsNotMatch?: string;
    noErrors?: boolean;
}

export const SignUp = ({ navigation }: NavigationProps) => {
    const [userInfoSignUp, setUserInfoSignUp] = useState<UserSignUpConfig>({
        password: null,
        email: null,
        repeatPassword: null,
        username: null,
    });
    const [errors, setErrors] = useState<ErrorConfig>();

    const handleEmailChange = (email: string) => {
        setErrors({ ...errors, email: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, email: email });
    };
    const handlePasswordChange = (password: string) => {
        setErrors({ ...errors, password: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, password: password });
    };
    const handlePasswordConfirmChange = (password: string) => {
        setErrors({ ...errors, repeatPassword: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, repeatPassword: password });
    };
    const handleUsernameChange = (username: string) => {
        setErrors({ ...errors, username: undefined });
        setUserInfoSignUp({ ...userInfoSignUp, username: username });
    };

    const validate = () => {
        const newErrors: ErrorConfig = {};
        const requiredFields: Partial<Record<keyof UserSignUpConfig, string>> = {
            email: "Email is required",
            username: "Username is required",
            password: "Password is required",
            repeatPassword: "Password confirmation is required",
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        Object.keys(requiredFields).forEach((field) => {
            const key = field as keyof UserSignUpConfig;
            if (!userInfoSignUp[key]) {
                newErrors[key] = requiredFields[key]!;
            }
        });

        if (userInfoSignUp.password && userInfoSignUp.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        if (userInfoSignUp.email && !emailRegex.test(userInfoSignUp.email)) {
            newErrors.email = "Invalid email format";
        }

        if (
            userInfoSignUp.password &&
            userInfoSignUp.repeatPassword &&
            userInfoSignUp.password !== userInfoSignUp.repeatPassword
        ) {
            newErrors.passwordsNotMatch = "Passwords do not match";
        }

        if (Object.keys(newErrors).length === 0) {
            newErrors.noErrors = true;
        }

        setErrors(newErrors);
    };

    const handleSingUp = async () => {
        console.log("here");
        validate();
        errors?.noErrors
            ? await createUser({
                  email: userInfoSignUp.email!,
                  password: userInfoSignUp.password!,
                  username: userInfoSignUp.username!,
              })
            : null;
    };

    const handleToSingIn = () => {
        navigation.navigate("SignIn");
    };

    return (
        <>
            <KeyboardAvoidingView keyboardVerticalOffset={20} behavior="position">
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Union />
                    </View>
                    <View style={styles.singUpForm}>
                        <AppInput
                            placeholder={"Email"}
                            value={userInfoSignUp.email}
                            setValue={handleEmailChange}
                        />
                        {errors?.email && <Text style={styles.invalidInput}>{errors.email}</Text>}
                        <AppInput
                            placeholder={"Username"}
                            value={userInfoSignUp.username}
                            setValue={handleUsernameChange}
                        />
                        {errors?.username && (
                            <Text style={styles.invalidInput}>{errors.username}</Text>
                        )}
                        <PasswordInput
                            placeholder={"Password"}
                            value={userInfoSignUp.password}
                            setValue={handlePasswordChange}
                        />
                        {errors?.password && (
                            <Text style={styles.invalidInput}>{errors.password}</Text>
                        )}
                        <PasswordInput
                            placeholder={"Confirm Password"}
                            value={userInfoSignUp.repeatPassword}
                            setValue={handlePasswordConfirmChange}
                        />
                        {errors?.repeatPassword && (
                            <Text style={styles.invalidInput}>{errors.repeatPassword}</Text>
                        )}
                        {errors?.passwordsNotMatch && (
                            <Text style={styles.invalidInput}>{errors.passwordsNotMatch}</Text>
                        )}
                    </View>
                    <AuthButton onPress={handleSingUp} buttonTitle={"SING UP"} />
                    <View style={styles.toSingInContainer}>
                        <Text style={styles.text}>Already have an account?</Text>
                        <TouchableOpacity onPress={handleToSingIn}>
                            <Text style={styles.toSingUp}>Sing In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};
