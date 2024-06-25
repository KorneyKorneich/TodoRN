import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TaskProps } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import styles from "./Task.styles.ts";
import { useAppNavigation } from "src/shared/types/navigationTypes/navigationTypes.ts";
import { formatDate } from "src/shared/helpers/formatDate.ts";
import { Clock } from "src/shared/assets/icons/clock.tsx";
import { ColorGuide } from "src/shared/types/styles/styleConstants.ts";

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

    const deadline = task.data.deadline ? new Date(task.data.deadline) : null;
    const currentTime = new Date();
    const timeDifference = deadline ? deadline.getTime() - currentTime.getTime() : null;
    const lessThanADay = timeDifference !== null && timeDifference < 24 * 60 * 60 * 1000;

    // Format deadline for display
    const formattedDeadline = deadline ? formatDate(deadline) : "";

    return (
        <TouchableOpacity
            onPress={handleOnPress}
            key={task.id}
            style={[styles.task, lessThanADay ? styles.taskUrgent : styles.taskNormal]}
        >
            <View style={styles.taskTitleContainer}>
                <Text style={styles.taskTitle}>{task.data.title}</Text>
                {lessThanADay && <Clock color={ColorGuide.WHITE} />}
            </View>
            <Text style={styles.taskDescription}>{task.data.description}</Text>
            <Text style={styles.taskDeadline}>{formattedDeadline}</Text>
        </TouchableOpacity>
    );
};
