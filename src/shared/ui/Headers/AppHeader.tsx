import { Text, TouchableOpacity, View } from "react-native";
import styles from "./AppHeader.styles.ts";
import { Screens } from "src/shared/types/navigationTypes/navigationTypes.ts";
import ChevronLeft from "src/shared/assets/icons/chevron-left.svg";
import { ReactNode, useCallback } from "react";
import { useAppNavigation } from "src/shared/types/rootTypes/rootTypes.ts";

interface HeaderProps {
    text?: string;
    buttons?: ReactNode[];
    screen: Screens;
}

export const AppHeader = ({ text, buttons, screen }: HeaderProps) => {
    const navigation = useAppNavigation();
    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, []);
    return (
        <View style={styles.headerContainer}>
            {screen === Screens.HOME ? (
                <Text style={styles.headerTitle}>{text}</Text>
            ) : (
                <TouchableOpacity onPress={handleGoBack}>
                    <ChevronLeft />
                </TouchableOpacity>
            )}
            <View style={styles.navBar}>{buttons}</View>
        </View>
    );
};
