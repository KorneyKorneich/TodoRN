import { StyleSheet } from "react-native";
import { HeadlineSizes } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    title: {
        fontSize: HeadlineSizes.HEADLINE_4,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        fontWeight: "600",
        fontFamily: "Bebas Neue Regular",
    },
});
