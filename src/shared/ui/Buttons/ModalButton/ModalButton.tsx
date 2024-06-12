import styles from "./ModalButton.styles.ts";
import { Text, TouchableOpacity } from "react-native";

interface ModalButtonProps {
    buttonTitle?: string;
    onPress: () => void;
}

export const ModalButton = (props: ModalButtonProps) => {
    const { onPress, buttonTitle } = props;
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonTitle}>{buttonTitle?.toUpperCase()}</Text>
            </TouchableOpacity>
        </>
    );
};
