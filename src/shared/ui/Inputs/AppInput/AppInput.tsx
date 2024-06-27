import styles from "./AppInput.styles.ts";
import { TextInput, View } from "react-native";
import { Nullable } from "src/shared/types/rootTypes/rootTypes.ts";

interface EmailInputProps {
    value: Nullable<string>;
    setValue: (value: string) => void;
    placeholder?: string;
}

export const AppInput = (props: EmailInputProps) => {
    const { value, setValue, placeholder } = props;

    const handleInputChange = (value: string) => {
        setValue(value);
    };
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    value={value ?? ""}
                    autoCapitalize="none"
                    onChangeText={handleInputChange}
                />
            </View>
        </>
    );
};
