import { StyleSheet } from "react-native";
import { BodyFontSizes, ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    task: {
        width: "90%",
        height: 120,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginHorizontal: "5%",
        marginBottom: 10,
        flexDirection: "column",
    },
    taskTitle: {
        fontWeight: "bold",
        fontSize: BodyFontSizes.BODY_1,
        fontFamily: "Montserrat",
        color: ColorGuide.WHITE,
    },
    taskDescription: {
        marginTop: "1%",
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
        color: ColorGuide.WHITE,
        height: "60%",
    },
    taskDeadline: {
        fontFamily: "Montserrat",
        fontSize: BodyFontSizes.BODY_2,
        color: ColorGuide.WHITE,
    },
    taskUrgent: {
        backgroundColor: ColorGuide.ACCENT_COLOR,
    },
    taskNormal: {
        backgroundColor: ColorGuide.PRIMARY_COLOR,
    },
    taskTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
