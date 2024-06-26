import DeleteIcon from "src/shared/assets/icons/delete.svg";
import { TouchableOpacity } from "react-native";

interface TaskDeleteButtonProps {
    handleOnPress: () => void;
}

export const TaskDeleteButton = (props: TaskDeleteButtonProps) => {
    const { handleOnPress } = props;
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <DeleteIcon />
        </TouchableOpacity>
    );
};
