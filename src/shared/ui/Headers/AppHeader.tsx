import { Text, TouchableOpacity, View } from "react-native";
import styles from "./AppHeader.styles.ts";
import { Screens, useAppNavigation } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { ReactNode, useCallback } from "react";
import { ChevronLeft } from "src/shared/assets/icons/chevron-left.tsx";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";

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
            <View style={styles.content}>
                {screen === Screens.HOME ? (
                    <Text style={styles.headerTitle}>{text}</Text>
                ) : (
                    <TouchableOpacity onPress={handleGoBack}>
                        <ChevronLeft color={ColorGuide.BLACK} />
                    </TouchableOpacity>
                )}
                <View style={styles.navBar}>{buttons}</View>
            </View>
        </View>
    );
};
