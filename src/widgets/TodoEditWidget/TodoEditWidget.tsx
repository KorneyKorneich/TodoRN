import styles from "./TodoEditWidget.styles.ts";
import { TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { View } from "react-native";
import { TodoInput } from "src/shared/ui/Inputs/TodoInput/TodoInput.tsx";
import { InputType } from "src/shared/types/uiConst/uiConst.ts";
import { DateInput } from "src/shared/ui/Inputs/DateInput/DateInput.tsx";
import { ImageInput } from "src/shared/ui/Inputs/ImageInput/ImageInput.tsx";

interface TodoEditWidget {
    taskToEdit: TaskConfigWithId;
    setTaskToEdit: (task: TaskConfigWithId) => void;
}

export const TodoEditWidget = (props: TodoEditWidget) => {
    const { taskToEdit, setTaskToEdit } = props;

    const handleOnTitleChange = (text: string): void => {
        setTaskToEdit({ ...taskToEdit, data: { ...taskToEdit.data, title: text } });
    };
    const handleOnDescriptionChange = (text: string): void => {
        setTaskToEdit({ ...taskToEdit, data: { ...taskToEdit.data, description: text } });
    };
    const handleOnDateChange = (date: number) => {
        setTaskToEdit({ ...taskToEdit, data: { ...taskToEdit.data, deadline: date } });
    };

    const handleOnImageChange = (img: string) => {
        setTaskToEdit({ ...taskToEdit, data: { ...taskToEdit.data, img: img } });
    };

    return (
        <View style={styles.widgetContainer}>
            <TodoInput
                inputType={InputType.TITLE}
                value={taskToEdit.data.title}
                onChange={handleOnTitleChange}
            />
            <TodoInput
                inputType={InputType.DESCRIPTION}
                value={taskToEdit.data.description}
                onChange={handleOnDescriptionChange}
            />
            <DateInput onDateChange={handleOnDateChange} taskDate={taskToEdit.data.deadline} />
            <ImageInput onImageChange={handleOnImageChange} taskImg={taskToEdit.data.img} />
        </View>
    );
};
