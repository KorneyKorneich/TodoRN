import styles from "./AuthButton.styles.ts";
import { Text, TouchableOpacity } from "react-native";

interface AuthButtonProps {
    buttonTitle: string;
    onPress: () => void;
}

export const AuthButton = (props: AuthButtonProps) => {
    const { onPress, buttonTitle } = props;
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonTitle}>{buttonTitle?.toUpperCase()}</Text>
            </TouchableOpacity>
        </>
    );
};
