import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./TaskAddButton.styles.ts";
import TaskAddIcon from "src/shared/assets/icons/plus-circle.svg";

export const TaskAddButton = ({ onPress }: TouchableOpacityProps) => {
    return (
        <>
            <View style={styles.taskAddButtonContainer}>
                <TouchableOpacity onPress={onPress}>
                    <TaskAddIcon width={72} height={72} />
                </TouchableOpacity>
            </View>
        </>
    );
};
