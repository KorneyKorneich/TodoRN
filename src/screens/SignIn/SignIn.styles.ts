import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginHorizontal: "auto",
        marginVertical: "auto",
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: ColorGuide.WHITE,
    },
    signInForm: {
        gap: 10,
    },
    text: {
        marginVertical: 5,
        fontFamily: "Montserrat",
        color: "#A4A4A4",
        fontStyle: "italic",
        fontSize: BodyFontSizes.BODY_2,
        textAlign: "right",
    },
    toSignUp: {
        marginVertical: 5,
        fontFamily: "Montserrat",
        color: ColorGuide.PRIMARY_COLOR,
        fontSize: BodyFontSizes.BODY_2,
    },
    toSignUpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
    invalidInput: {
        fontFamily: "Montserrat",
        color: ColorGuide.ACCENT_COLOR,
    },
    content: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "90%",
        marginHorizontal: "auto",
    },
    loader: {
        marginHorizontal: "auto",
        marginVertical: "auto",
    },
});
