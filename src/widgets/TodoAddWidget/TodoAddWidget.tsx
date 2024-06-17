import styles from "./TodoAddWidget.styles.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { View } from "react-native";
import { TodoInput } from "src/shared/ui/Inputs/TodoInput/TodoInput.tsx";
import { InputType } from "src/shared/types/uiConst/uiConst.ts";
import { DateInput } from "src/shared/ui/Inputs/DateInput/DateInput.tsx";
import { ImageInput } from "src/shared/ui/Inputs/ImageInput/ImageInput.tsx";

interface TodoAddWidgetProps {
    taskToAdd: TaskConfig;
    setTaskToAdd: (task: TaskConfig) => void;
}

export const TodoAddWidget = (props: TodoAddWidgetProps) => {
    const { taskToAdd, setTaskToAdd } = props;

    const handleOnTitleChange = (text: string): void => {
        setTaskToAdd({ ...taskToAdd, title: text });
    };
    const handleOnDescriptionChange = (text: string): void => {
        setTaskToAdd({ ...taskToAdd, description: text });
    };
    const handleOnDateChange = (date: number) => {
        setTaskToAdd({ ...taskToAdd, deadline: date });
    };

    //Todo: fix - A non-serializable value was detected in the state, in the path: `tasks.tasks.2.data.deadline`. Value: 2024-07-13T17:17:00.000Z
    // Take a look at the reducer(s) handling this action type: tasks/addTaskToDB/fulfilled.

    const handleOnImageChange = (img: string) => {
        // console.log("widget", img.TodoSlice(0, 5));
        setTaskToAdd({ ...taskToAdd, img: img });
    };

    return (
        <View style={styles.widgetContainer}>
            <TodoInput
                inputType={InputType.TITLE}
                value={taskToAdd.title}
                onChange={handleOnTitleChange}
            />
            <TodoInput
                inputType={InputType.DESCRIPTION}
                value={taskToAdd.description}
                onChange={handleOnDescriptionChange}
            />
            <DateInput onDateChange={handleOnDateChange} />
            <ImageInput onImageChange={handleOnImageChange} />
        </View>
    );
};
