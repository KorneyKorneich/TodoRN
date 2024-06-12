import { StyleSheet } from "react-native";
import { ColorGuide, HEIGHT, OVERDRAG } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: HEIGHT * 0.9,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: ColorGuide.PRIMARY_COLOR,
        zIndex: 1000,
        bottom: -OVERDRAG * 1.1,
    },
    rectContainer: {
        paddingTop: 10,
        marginHorizontal: "auto",
    },
    rect: {
        width: 80,
        height: 6,
        backgroundColor: ColorGuide.WHITE,
        borderRadius: 4,
    },
    content: {
        paddingTop: 10,
        height: "84%",
    },
});
