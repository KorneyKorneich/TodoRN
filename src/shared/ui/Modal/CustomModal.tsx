import styles from "./CustomModal.styles.ts";
import React from "react";
import { View } from "react-native";
import { ModalButton } from "src/shared/ui/Buttons/ModalButton/ModalButton.tsx";

interface CustomModalProps {
    content: React.ReactNode;
    buttonTitle?: string;
    handleOnPressButton: () => void;
}

export const CustomModal = (props: CustomModalProps) => {
    const { handleOnPressButton, buttonTitle, content } = props;

    return (
        <View style={styles.container}>
            <View style={styles.rectContainer}>
                <View style={styles.rect} />
            </View>
            <View style={styles.content}>{content}</View>
            <ModalButton onPress={handleOnPressButton} buttonTitle={buttonTitle} />
        </View>
    );
};
