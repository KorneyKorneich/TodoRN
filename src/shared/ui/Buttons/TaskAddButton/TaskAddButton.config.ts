import { ButtonProps } from "react-native";

export interface TaskAddButtonProps extends ButtonProps {
    onPress?: () => void;
}
