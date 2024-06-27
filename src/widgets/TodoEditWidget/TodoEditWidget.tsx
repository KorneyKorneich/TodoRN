import styles from "./TodoEditWidget.styles.ts";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { View } from "react-native";
import { TodoInput } from "src/shared/ui/Inputs/TodoInput/TodoInput.tsx";
import { InputType } from "src/shared/types/uiConst/const.ts";
import { DateInput } from "src/shared/ui/Inputs/DateInput/DateInput.tsx";
import { ImageInput } from "src/shared/ui/Inputs/ImageInput/ImageInput.tsx";

interface TodoEditWidget {
    taskToEdit: TaskConfigWithId;
    setTaskToEdit: (task: TaskConfigWithId) => void;
}

export const TodoEditWidget = (props: TodoEditWidget) => {
    const { taskToEdit, setTaskToEdit } = props;

    const handleChange = (field: keyof TaskConfigWithId["data"], value: string | number) => {
        setTaskToEdit({ ...taskToEdit, data: { ...taskToEdit.data, [field]: value } });
    };

    return (
        <View style={styles.widgetContainer}>
            <TodoInput
                inputType={InputType.TITLE}
                value={taskToEdit.data.title}
                onChange={(text) => handleChange("title", text)}
            />
            <TodoInput
                inputType={InputType.DESCRIPTION}
                value={taskToEdit.data.description}
                onChange={(text) => handleChange("description", text)}
            />
            <DateInput
                onDateChange={(date) => handleChange("deadline", date)}
                taskDate={taskToEdit.data.deadline ?? undefined}
            />
            <ImageInput
                onImageChange={(img) => handleChange("img", img)}
                taskImg={taskToEdit.data.img ?? undefined}
            />
        </View>
    );
};
