import styles from "./PasswordInput.styles.ts";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
import { SecureIconComponent } from "src/shared/assets/icons/SecureIconComponent.tsx";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

interface PasswordInputProps {
    value: Nullable<string>;
    setValue: (value: string) => void;
    placeholder?: string;
}

export const PasswordInput = (props: PasswordInputProps) => {
    const { value, setValue, placeholder } = props;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleInputChange = (value: string) => {
        setValue(value);
    };

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    secureTextEntry={!isPasswordVisible}
                    value={value ?? ""}
                    onChangeText={handleInputChange}
                />
                <TouchableOpacity onPress={togglePassword}>
                    <SecureIconComponent
                        color={isPasswordVisible ? ColorGuide.ACCENT_COLOR : ColorGuide.GREY}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};
