import { Text, TouchableOpacity } from "react-native";
import { TaskProps } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import styles from "./Task.styles.ts";
import { formatDate } from "src/shared/helpers/formatDate.ts";
import { useMemo } from "react";
import { useAppNavigation } from "src/shared/types/rootTypes/rootTypes.ts";

type TaskComponentProps = {
    task: TaskProps["task"];
};

export const Task = (props: TaskComponentProps) => {
    const { task } = props;
    const navigation = useAppNavigation();

    const handleOnPress = () => {
        navigation.navigate("TaskDetails", {
            taskId: task.id,
        });
    };

    const deadline = useMemo(
        () => task.data.deadline ?? formatDate(new Date(task.data.deadline)),
        [task.data.deadline],
    );

    return (
        <TouchableOpacity onPress={handleOnPress} key={task.id} style={styles.task}>
            <Text style={styles.taskTitle}>{task.data.title}</Text>
            <Text style={styles.taskDescription}>{task.data.description}</Text>
            <Text style={styles.taskDeadline}>{deadline}</Text>
        </TouchableOpacity>
    );
};
