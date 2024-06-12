// import styles from "./TodoAddWidget.styles.ts";
// import { useState } from "react";
// import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
// import { Text, TextInput } from "react-native";
//
// interface TodoAddWidgetProps {}
//
// const taskToAddInitialState: TaskConfig = {
//     description: null,
//     title: null,
// };
//
// export const TodoAddWidget = (props: TodoAddWidgetProps) => {
//     const [taskToAdd, setTaskToAdd] = useState<TaskConfig>(taskToAddInitialState);
//
//     const handleOnChange = (text: string): void => {
//         setTaskToAdd({ ...taskToAdd, title: text });
//     };
//     const {} = props;
//
//     return (
//         <>
//             <Text>This is a content</Text>
//             <TextInput
//                 placeholder={"New todo here"}
//                 value={taskToAdd.title}
//                 onChangeText={handleOnChange}
//             />
//         </>
//     );
// };

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
