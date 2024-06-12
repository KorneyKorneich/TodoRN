import { Text } from "react-native";
import styles from "./ArticleTite.styles.ts";

export interface ArticleBarProps {
    text: string;
    buttons?: React.ReactNode[];
}

export const ArticleBar = ({ text, buttons }: ArticleBarProps) => {
    return (
        <>
            <Text style={styles.articleTitle}>{text}</Text>
        </>
    );
};
