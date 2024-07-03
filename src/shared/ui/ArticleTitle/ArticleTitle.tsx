import { StyleProp, Text, TextStyle, View } from "react-native";
import styles from "./ArticleTite.styles.ts";
import { ReactNode } from "react";

export interface ArticleBarProps {
    text: string;
    buttons?: ReactNode[];
    style?: StyleProp<TextStyle>;
}

export const ArticleBar = ({ style, text, buttons }: ArticleBarProps) => {
    return (
        <View style={styles.articleContainer}>
            <Text style={[styles.articleTitle, style]}>{text}</Text>
            {buttons}
        </View>
    );
};
