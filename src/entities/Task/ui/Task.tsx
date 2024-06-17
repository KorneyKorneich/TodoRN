import { Text, TouchableOpacity } from "react-native";
import { TaskProps } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { useState } from "react";
import styles from "./Task.styles.ts";
import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
import { deleteTask } from "src/shared/firebase/cloud/api/deleteTask/deleteTask.ts";
import { useAppNavigation } from "src/shared/types/navigationTypes/navigationTypes.ts";

type TaskComponentProps = {
    task: TaskProps["task"];
};
//Todo: add task delete functional in taskPage

export const Task = (props: TaskComponentProps) => {
    const { task } = props;
    // const dispatch = useAppDispatch();

    const navigation = useAppNavigation();

    // const [toggleCheckBox, setToggleCheckBox] = useState(false);
    // const [isDisabled, setDisabled] = useState(false);

    const handleOnPress = () => {
        navigation.navigate("TaskEdit", {
            taskData: task,
        });
    };

    // const handleDelete = () => {
    //     dispatch(deleteTask(task.id));
    // };

    return (
        <TouchableOpacity onPress={handleOnPress} key={task.id} style={styles.task}>
            <Text style={styles.taskTitle}>{task.data.title}</Text>
            <Text style={styles.taskDescription}>{task.data.description}</Text>
        </TouchableOpacity>
    );
};
