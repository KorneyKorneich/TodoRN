import { Dimensions } from "react-native";

export enum HeadlineSizes {
    HEADLINE_1 = 73,
    HEADLINE_2 = 45,
    HEADLINE_3 = 36,
    HEADLINE_4 = 26,
}

export enum BodyFontSizes {
    BODY_1 = 16,
    BODY_2 = 14,
    SMALL = 12,
    BUTTON = 15,
}

export enum ColorGuide {
    PRIMARY_COLOR = "#F79E89",
    ACCENT_COLOR = "#F76C6A",
    BLACK = "#272727",
    GREY = "#E4E4E4",
    DARK_GREY = "#A4A4A4",
    WHITE = "#FFFFFF",
    BACKDROP_COLOR = "rgba(0, 0, 0, 0.3)",
}

export const OVERDRAG = 20;

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
