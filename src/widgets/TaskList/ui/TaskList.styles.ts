import { StyleSheet } from "react-native";
import {
    BodyFontSizes,
    ColorGuide,
    HeadlineSizes,
} from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    taskListContainer: {
        width: "100%",
        height: "93%",
    },
    emptyContainer: {
        width: "100%",
        height: "100%",
        marginTop: 100,
        alignItems: "center",
        flexDirection: "column",
    },
    emptyTextTitle: {
        fontFamily: "Bebas Neue Regular",
        fontSize: HeadlineSizes.HEADLINE_2,
        color: ColorGuide.ACCENT_COLOR,
    },
    emptyText: {
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
    },
});
