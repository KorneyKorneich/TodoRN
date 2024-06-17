import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide, HEIGHT } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        borderColor: ColorGuide.WHITE,
        borderRadius: 12,
        paddingVertical: "3%",
    },
    default: {
        fontFamily: "Montserrat",
        color: ColorGuide.WHITE,
        paddingHorizontal: "2%",
        fontSize: BodyFontSizes.BODY_1,
    },
    description: {
        height: HEIGHT * 0.4,
    },
    title: {},
});
