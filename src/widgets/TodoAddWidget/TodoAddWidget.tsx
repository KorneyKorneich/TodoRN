import styles from "./TodoAddWidget.styles.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { Text, TextInput } from "react-native";

interface TodoAddWidgetProps {
    taskToAdd: TaskConfig;
    setTaskToAdd: (task: TaskConfig) => void;
}

export const TodoAddWidget = (props: TodoAddWidgetProps) => {
    const { taskToAdd, setTaskToAdd } = props;

    const handleOnChange = (text: string): void => {
        setTaskToAdd({ ...taskToAdd, title: text });
    };

    return (
        <>
            <Text>This is a content</Text>
            <TextInput
                placeholder={"New todo here"}
                value={taskToAdd.title}
                onChangeText={handleOnChange}
            />
        </>
    );
};
