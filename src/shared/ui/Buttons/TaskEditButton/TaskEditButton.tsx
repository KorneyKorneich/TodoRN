import EditIcon from "../../../assets/icons/edit.svg";
import { TouchableOpacity } from "react-native";

interface TaskEditButtonProps {
    handleOnPress: () => void;
}

export const TaskEditButton = (props: TaskEditButtonProps) => {
    const { handleOnPress } = props;
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <EditIcon />
        </TouchableOpacity>
    );
};
