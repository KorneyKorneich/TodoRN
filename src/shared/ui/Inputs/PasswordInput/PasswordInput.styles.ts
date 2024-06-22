import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderWidth: 2,
        borderColor: ColorGuide.GREY,
        borderRadius: 12,
        paddingVertical: "3%",
        flexDirection: "row",
        paddingHorizontal: "3%",
    },
    secureIcon: {},
    visiblePassword: { color: ColorGuide.GREY },
    invisiblePassword: { color: ColorGuide.ACCENT_COLOR },
    input: {
        width: "93%",
        overflow: "hidden",
        fontFamily: "Montserrat",
        color: ColorGuide.BLACK,
        fontSize: BodyFontSizes.BODY_1,
    },
});
