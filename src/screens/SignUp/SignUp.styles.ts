import { StyleSheet } from "react-native";
import {
    BodyFontSizes,
    ColorGuide,
    HEIGHT,
    WIDTH,
} from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginHorizontal: "auto",
        marginVertical: "auto",
    },
    invalidInput: {
        fontFamily: "Montserrat",
        color: ColorGuide.ACCENT_COLOR,
    },
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: HEIGHT * 0.89,
        width: WIDTH * 0.9,
        marginHorizontal: "auto",
    },
    signUpForm: {
        marginBottom: HEIGHT * 0.03,
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
    toSignInContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
});
