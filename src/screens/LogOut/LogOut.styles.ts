import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    logo: {
        height: "60%",
        width: "100%",
    },
    rootContainer: {
        marginHorizontal: "auto",
        width: "90%",
        height: "90%",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    textContainer: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
        marginVertical: "2%",
    },
    title: {
        color: ColorGuide.BLACK,
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
    },
    content: {
        color: ColorGuide.PRIMARY_COLOR,
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
    },
});
