import { Text, View } from "react-native";
import styles from "./AppHeader.styles.ts";
import { Screens, useAppNavigation } from "src/shared/types/navigationTypes/navigationTypes.ts";
import ChevronLeft from "src/shared/assets/icons/chevron-left.svg";
import { ReactNode, useCallback } from "react";

interface HeaderProps {
    text?: string;
    buttons: ReactNode[];
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
                <ChevronLeft onPress={handleGoBack} />
            )}
            <View style={styles.navBar}>{buttons}</View>
        </View>
    );
};
