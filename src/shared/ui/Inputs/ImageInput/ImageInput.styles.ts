import { Platform, StyleSheet } from "react-native";
import {
    BodyFontSizes,
    ColorGuide,
    HEIGHT,
    WIDTH,
} from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        borderRadius: 12,
        paddingVertical: Platform.OS === "ios" ? "3%" : null,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "2%",
    },
    emptyInput: {
        borderColor: ColorGuide.GREY,
    },
    filledInput: {
        borderColor: ColorGuide.WHITE,
    },
    default: {
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_1,
        color: ColorGuide.WHITE,
    },
    imageName: {
        textDecorationLine: "underline",
    },
    imageInputContainer: {
        width: "60%",
    },
    modalWrapper: {
        backgroundColor: ColorGuide.PRIMARY_COLOR,
        height: HEIGHT,
        width: WIDTH,
    },
    imageContainer: {
        height: HEIGHT * 0.4,
        width: WIDTH * 0.8,
        margin: "auto",
        justifyContent: "space-between",
    },
    image: {
        height: "80%",
        borderRadius: 12,
    },
});
