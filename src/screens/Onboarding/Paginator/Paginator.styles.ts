import { StyleSheet } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: ColorGuide.PRIMARY_COLOR,
        marginHorizontal: 8,
    },
});
