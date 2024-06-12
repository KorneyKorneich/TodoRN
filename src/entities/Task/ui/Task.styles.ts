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
        backgroundColor: ColorGuide.PRIMARY_COLOR,
        // justifyContent: "space-between",
        // alignItems: "center",
        // padding: 10,
        marginBottom: 10,
        flexDirection: "row",
    },
    taskTitle: {
        fontWeight: "bold",
        fontSize: BodyFontSizes.BODY_1,
        color: ColorGuide.WHITE,
    },
    taskDescription: {},
});
