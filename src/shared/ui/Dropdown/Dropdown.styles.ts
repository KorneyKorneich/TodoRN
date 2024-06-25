import { StyleSheet } from "react-native";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";

export default StyleSheet.create({
    dropdown: {
        position: "absolute",
        top: 50,
        right: 10,
        width: 150,
        backgroundColor: ColorGuide.WHITE,
        borderColor: ColorGuide.GREY,
        borderWidth: 1,
        borderRadius: 12,
        shadowColor: ColorGuide.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        zIndex: 1000,
    },
    dropdownItem: {
        padding: 10,
    },
    selected: {
        color: ColorGuide.ACCENT_COLOR,
        fontWeight: "600",
    },
    unselected: {
        color: ColorGuide.BLACK,
    },
});
