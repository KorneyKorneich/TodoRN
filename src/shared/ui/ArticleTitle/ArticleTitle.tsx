import { StyleProp, Text, TextStyle } from "react-native";
import styles from "./ArticleTite.styles.ts";
import { ReactNode } from "react";

export interface ArticleBarProps {
    text: string;
    buttons?: ReactNode[];
    style?: StyleProp<TextStyle>;
}

export const ArticleBar = ({ style, text }: ArticleBarProps) => {
    return (
        <>
            <Text style={[styles.articleTitle, style]}>{text}</Text>
        </>
    );
};
