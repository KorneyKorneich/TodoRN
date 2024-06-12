import { StyleSheet } from "react-native";
import { ColorGuide, HeadlineSizes } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    articleTitle: {
        fontSize: HeadlineSizes.HEADLINE_3,
        marginHorizontal: "5%",
        fontWeight: "bold",
        color: ColorGuide.ACCENT_COLOR,
    },
});
