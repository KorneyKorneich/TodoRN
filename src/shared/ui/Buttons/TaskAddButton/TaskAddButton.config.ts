import { ButtonProps, StyleProp, ViewStyle } from "react-native";

export interface TaskAddButtonProps extends ButtonProps {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}
