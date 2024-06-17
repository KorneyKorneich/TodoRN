import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        borderRadius: 12,
        paddingVertical: "3%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "2%",
    },
    dateInput: {
        color: ColorGuide.WHITE,
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_1,
    },
    emptyInput: {
        borderColor: ColorGuide.GREY,
    },
    filledInput: {
        borderColor: ColorGuide.WHITE,
    },
});
