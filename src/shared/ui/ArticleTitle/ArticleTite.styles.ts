import { Platform, StyleSheet } from "react-native";
import { ColorGuide, HeadlineSizes } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    articleTitle: {
        fontSize: HeadlineSizes.HEADLINE_3,
        fontWeight: "600",
        color: ColorGuide.ACCENT_COLOR,
        fontFamily: "Bebas Neue Regular",
    },
    articleContainer: {
        marginHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
