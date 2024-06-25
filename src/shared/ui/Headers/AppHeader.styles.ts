import { Platform, StyleSheet } from "react-native";
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
        fontWeight: "600",
        color: ColorGuide.PRIMARY_COLOR,
        fontFamily: "Bebas Neue Regular",
    },
    navBar: {
        flexDirection: "row",
        gap: 10,
    },
});
