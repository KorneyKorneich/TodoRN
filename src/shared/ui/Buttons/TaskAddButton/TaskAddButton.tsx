import { TouchableOpacity } from "react-native";
import styles from "./TaskAddButton.styles.ts";
import { TaskAddButtonProps } from "src/shared/ui/Buttons/TaskAddButton/TaskAddButton.config.ts";
import TaskAddIcon from "src/shared/assets/icons/plus-ico.svg";

export const TaskAddButton = ({ onPress }: TaskAddButtonProps) => {
    return (
        <>
            {/*<TaskAddIcon />*/}
            <TouchableOpacity style={styles.button} onPress={onPress}></TouchableOpacity>
        </>
    );
    //How to use a svg?
};
