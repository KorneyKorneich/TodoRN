import { StyleSheet } from "react-native";
import {
    BodyFontSizes,
    ColorGuide,
    HEIGHT,
    WIDTH,
} from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    task: {
        width: "90%",
        height: 120,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginHorizontal: "5%",
        backgroundColor: ColorGuide.PRIMARY_COLOR,
        marginBottom: 10,
        flexDirection: "column",
    },
    taskTitle: {
        color: ColorGuide.BLACK,
    },
    taskDescription: {
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_1,
        color: ColorGuide.BLACK,
        width: "90%",
        marginHorizontal: "auto",
    },
    taskImageContainer: {
        marginHorizontal: "auto",
        width: WIDTH * 0.9,
        height: HEIGHT * 0.2,
        marginVertical: "2%",
        borderRadius: 8,
        borderColor: ColorGuide.PRIMARY_COLOR,
        borderWidth: 1,
    },
    taskTimestamp: {
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
        color: ColorGuide.BLACK,
        marginHorizontal: "auto",
        paddingBottom: 5,
    },
});
