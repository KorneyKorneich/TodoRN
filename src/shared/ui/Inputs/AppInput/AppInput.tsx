import styles from "./AppInput.styles.ts";
import { TextInput, View } from "react-native";

interface EmailInputProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
}

export const AppInput = (props: EmailInputProps) => {
    const { value, setValue, placeholder } = props;

    const handleInputChange = (value: string) => {
        setValue(value);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                autoCapitalize="none"
                onChangeText={handleInputChange}
            />
        </View>
    );
};
