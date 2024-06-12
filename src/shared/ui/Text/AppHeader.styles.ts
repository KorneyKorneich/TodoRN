import { StyleSheet } from "react-native";
import { ColorGuide, HeadlineSizes } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    headerContainer: {
        position: "static",
        marginVertical: 10,
        marginHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: HeadlineSizes.HEADLINE_4,
        fontWeight: "bold",
        color: ColorGuide.PRIMARY_COLOR,
    },
    navBar: {
        gap: 5,
    },
});
