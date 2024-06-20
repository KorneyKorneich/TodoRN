import { TouchableOpacity, View } from "react-native";
import styles from "./TaskAddButton.styles.ts";
import { TaskAddButtonProps } from "src/shared/ui/Buttons/TaskAddButton/TaskAddButton.config.ts";
import TaskAddIcon from "src/shared/assets/icons/plus-ico.svg";

export const TaskAddButton = ({ onPress, style }: TaskAddButtonProps) => {
    return (
        <>
            <View style={style}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <TaskAddIcon width={40} height={40} />
                </TouchableOpacity>
            </View>
        </>
    );
};
