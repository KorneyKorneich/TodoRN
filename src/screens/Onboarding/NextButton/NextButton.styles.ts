import { StyleSheet } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        position: "absolute",
        backgroundColor: ColorGuide.PRIMARY_COLOR,
        borderRadius: 100,
        padding: 20,
    },
});
