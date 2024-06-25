import { StyleSheet } from "react-native";
import {
    BodyFontSizes,
    ColorGuide,
    HeadlineSizes,
} from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: ColorGuide.WHITE,
    },
    image: {
        flex: 0.7,
        justifyContent: "center",
    },
    title: {
        fontWeight: "800",
        fontFamily: "Bebas Neue Regular",
        color: ColorGuide.ACCENT_COLOR,
        marginBottom: 10,
        textAlign: "center",
        fontSize: HeadlineSizes.HEADLINE_2,
    },
    description: {
        fontWeight: "500",
        fontFamily: "Montserrat",
        color: ColorGuide.PRIMARY_COLOR,
        paddingHorizontal: 64,
        textAlign: "center",
    },
});
