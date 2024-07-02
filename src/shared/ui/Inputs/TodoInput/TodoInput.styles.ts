import { Platform, StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        borderColor: ColorGuide.WHITE,
        borderRadius: 12,
        paddingVertical: Platform.OS === "ios" ? "2%" : null,
    },
    default: {
        fontFamily: "Montserrat",
        color: ColorGuide.WHITE,
        paddingHorizontal: "2%",
        fontSize: BodyFontSizes.BODY_1,
    },
    description: {
        height: "60%",
    },
    title: {},
});
