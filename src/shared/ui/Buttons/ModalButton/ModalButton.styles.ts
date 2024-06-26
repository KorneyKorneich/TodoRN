import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    button: {
        width: "90%",
        backgroundColor: ColorGuide.WHITE,
        borderRadius: 12,
        paddingVertical: "4%",
        marginHorizontal: "auto",
    },
    buttonTitle: {
        fontSize: BodyFontSizes.BUTTON,
        textAlign: "center",
        color: ColorGuide.PRIMARY_COLOR,
    },
});
